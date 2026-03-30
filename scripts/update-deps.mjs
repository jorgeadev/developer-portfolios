#!/usr/bin/env node
/**
 * update-deps.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Scans every workspace defined in pnpm-workspace.yaml, queries the npm
 * registry for the latest version of each dependency, and writes updated
 * package.json files in-place.
 *
 * Usage:
 *   node scripts/update-deps.mjs              # apply updates
 *   node scripts/update-deps.mjs --dry-run   # preview only, no writes
 *   node scripts/update-deps.mjs --audit      # run pnpm audit after updates
 *   node scripts/update-deps.mjs --major      # also apply major-version bumps
 *
 * Packages listed in SKIP_PACKAGES are never updated.
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── CLI flags ──────────────────────────────────────────────────────────────
const DRY_RUN    = process.argv.includes('--dry-run');
const RUN_AUDIT  = process.argv.includes('--audit');
const ALLOW_MAJOR = process.argv.includes('--major');

// ── Packages to never update ───────────────────────────────────────────────
// Add package names here when a specific version must stay pinned for compat.
const SKIP_PACKAGES = new Set([
	'cross-env',       // kept at 7.x for react-scripts (CRA) compat in developer-portfolio-2
	'react-scripts',   // abandoned; version bump won't fix its vuln tree
	'emailjs-com',     // legacy, replaced by @emailjs/browser
	'wowjs',           // unmaintained, no updates expected
]);

// ── Terminal colours ───────────────────────────────────────────────────────
const C = {
	reset:  '\x1b[0m',
	bold:   '\x1b[1m',
	dim:    '\x1b[2m',
	red:    '\x1b[31m',
	green:  '\x1b[32m',
	yellow: '\x1b[33m',
	blue:   '\x1b[34m',
	cyan:   '\x1b[36m',
	gray:   '\x1b[90m',
};
const c = (col, txt) => `${C[col]}${txt}${C.reset}`;
const bold = txt => `${C.bold}${txt}${C.reset}`;

// ── npm registry fetch ─────────────────────────────────────────────────────
function fetchLatest(pkg) {
	// Scoped packages need special encoding: @scope/name → %40scope%2Fname
	const encoded = pkg.startsWith('@')
		? `@${encodeURIComponent(pkg.slice(1))}`
		: encodeURIComponent(pkg);

	return new Promise(resolve => {
		const url = `https://registry.npmjs.org/${encoded}/latest`;
		https.get(url, res => {
			let raw = '';
			res.on('data', chunk => (raw += chunk));
			res.on('end', () => {
				try {
					const data = JSON.parse(raw);
					resolve({ version: data.version ?? null, deprecated: data.deprecated ?? null });
				} catch {
					resolve({ version: null, deprecated: null });
				}
			});
		}).on('error', () => resolve({ version: null, deprecated: null }));
	});
}

// ── Semver helpers ─────────────────────────────────────────────────────────
function parseSpec(spec) {
	if (spec === 'latest' || spec === '*') return { prefix: '', version: spec, special: spec };
	const m = spec.match(/^([~^]?)(\d[\d.]*)(.*)$/);
	if (!m) return { prefix: '', version: spec, special: null };
	return { prefix: m[1], version: m[2], prerelease: m[3], special: null };
}

/** Returns positive if b > a (b is newer), 0 if equal, negative if a newer */
function semverDiff(a, b) {
	const parse = v => v.replace(/[^\d.]/g, '').split('.').map(n => parseInt(n, 10) || 0);
	const [aMaj, aMin] = parse(a);
	const [bMaj, bMin] = parse(b);
	if (bMaj !== aMaj) return bMaj - aMaj; // positive = major bump
	return bMin - aMin; // positive = minor bump
}

function isMajorBump(current, latest) {
	const parse = v => parseInt(v.replace(/[^\d.].*/, '').split('.')[0], 10) || 0;
	return parse(latest) > parse(current);
}

// ── pnpm-workspace.yaml parser ─────────────────────────────────────────────
function getWorkspaces() {
	const yaml = readFileSync(join(ROOT, 'pnpm-workspace.yaml'), 'utf-8');
	const packages = [];
	let inPackages = false;
	for (const line of yaml.split('\n')) {
		if (line.trim() === 'packages:') { inPackages = true; continue; }
		if (inPackages && /^\s+-/.test(line)) {
			packages.push(line.replace(/^\s*-\s*["']?/, '').replace(/["']\s*$/, '').trim());
		} else if (inPackages && line.trim() && !/^\s/.test(line)) {
			break;
		}
	}
	return packages;
}

// ── Process one package.json ───────────────────────────────────────────────
async function processPackage(pkgPath, workspaceName) {
	if (!existsSync(pkgPath)) return null;

	const raw = readFileSync(pkgPath, 'utf-8');
	// Detect indent style (tabs vs spaces)
	const indent = raw.match(/^[\t ]+/m)?.[0]?.[0] === '\t' ? '\t' : 2;
	const pkg = JSON.parse(raw);

	const SECTIONS = ['dependencies', 'devDependencies', 'peerDependencies'];
	const updates     = []; // { section, name, from, to, major, deprecated }
	const skipped     = []; // { name, reason }

	for (const section of SECTIONS) {
		if (!pkg[section]) continue;

		const names = Object.keys(pkg[section]);
		// Batch-fetch all at once for this section
		const results = await Promise.all(names.map(fetchLatest));

		for (let i = 0; i < names.length; i++) {
			const name    = names[i];
			const current = pkg[section][name];
			const { version: latest, deprecated } = results[i];

			// ── Skip rules ─────────────────────────────────────────────
			if (SKIP_PACKAGES.has(name)) {
				skipped.push({ name, reason: 'pinned (see SKIP_PACKAGES)' });
				continue;
			}
			if (current === '*' || current === '') continue;
			if (!latest) {
				skipped.push({ name, reason: 'not found in registry' });
				continue;
			}

			const { prefix, version: currentVer, special } = parseSpec(current);

			// "latest" or "*" → pin to actual latest version
			if (special === 'latest' || special === '*') {
				const newVal = latest;
				if (newVal !== current) {
					updates.push({ section, name, from: current, to: newVal, major: false, deprecated });
					if (!DRY_RUN) pkg[section][name] = newVal;
				}
				continue;
			}

			// Normal semver: skip if already at latest
			if (semverDiff(currentVer, latest) <= 0) continue;

			// Skip major bumps unless --major flag is set
			const major = isMajorBump(currentVer, latest);
			if (major && !ALLOW_MAJOR) {
				skipped.push({ name, reason: `major bump (${currentVer} → ${latest}), use --major to apply` });
				continue;
			}

			const newVal = `${prefix}${latest}`;
			if (newVal === current) continue;

			updates.push({ section, name, from: current, to: newVal, major, deprecated });
			if (!DRY_RUN) pkg[section][name] = newVal;
		}
	}

	if (!DRY_RUN && updates.length > 0) {
		const serialized = JSON.stringify(pkg, null, indent);
		writeFileSync(pkgPath, serialized + '\n');
	}

	return { workspace: workspaceName, updates, skipped };
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
	const started = Date.now();

	console.log('');
	console.log(bold('📦  Developer Portfolios — Dependency Updater'));
	console.log(c('dim', `    ${new Date().toUTCString()}`));
	console.log(c('dim', `    Mode: ${DRY_RUN ? '🔍 Dry Run (no files written)' : '✍️  Live Update'} | Major bumps: ${ALLOW_MAJOR ? 'enabled' : 'disabled (use --major)'}`));
	console.log('');

	const workspaces = getWorkspaces();
	const targets = [
		{ name: 'root (monorepo)',  path: join(ROOT, 'package.json') },
		...workspaces.map(ws => ({ name: ws, path: join(ROOT, ws, 'package.json') })),
	];

	const report   = [];
	let totalUpdates = 0;
	let totalSkipped = 0;

	for (const target of targets) {
		process.stdout.write(`  ${c('cyan', '→')} ${bold(target.name.padEnd(30))}`);
		const result = await processPackage(target.path, target.name);

		if (!result) {
			console.log(c('gray', '(not found)'));
			continue;
		}

		if (result.updates.length === 0 && result.skipped.length === 0) {
			console.log(c('green', '✓ up to date'));
		} else {
			const updLabel = result.updates.length > 0
				? c('yellow', `⬆  ${result.updates.length} update${result.updates.length > 1 ? 's' : ''}`)
				: '';
			const skipLabel = result.skipped.length > 0
				? c('gray', ` (${result.skipped.length} skipped)`)
				: '';
			console.log(`${updLabel || c('green', '✓')}${skipLabel}`);

			for (const u of result.updates) {
				const majorTag  = u.major    ? c('red',    ' [MAJOR]')   : '';
				const deprTag   = u.deprecated ? c('yellow', ' [DEPRECATED]') : '';
				const arrow     = `${c('red', u.from)} → ${c('green', u.to)}`;
				console.log(`      ${c('gray', u.section.padEnd(18))} ${bold(u.name)} ${arrow}${majorTag}${deprTag}`);
			}

			if (result.skipped.length > 0) {
				for (const s of result.skipped) {
					console.log(`      ${c('gray', '(skipped)')}           ${c('dim', s.name)} — ${c('gray', s.reason)}`);
				}
			}

			totalUpdates += result.updates.length;
			totalSkipped += result.skipped.length;
			report.push(result);
		}
	}

	const elapsed = ((Date.now() - started) / 1000).toFixed(1);
	console.log('');
	console.log(c('dim', '─'.repeat(60)));

	if (totalUpdates === 0) {
		console.log(c('green', `✅  All packages are up to date! (${elapsed}s)`));
	} else if (DRY_RUN) {
		console.log(c('yellow', `⚠️   ${totalUpdates} update(s) available. Run without --dry-run to apply.`));
	} else {
		console.log(c('green', `✅  Updated ${bold(totalUpdates)} package(s) across ${bold(report.length)} workspace(s).`));
		console.log('');
		console.log(`  ${c('blue', 'Next steps:')}`);
		console.log(`    1. ${bold('pnpm install')}        — install updated packages`);
		console.log(`    2. ${bold('pnpm audit')}          — verify security status`);
		console.log(`    3. ${bold('pnpm run build:all')}  — validate builds`);
	}
	if (totalSkipped > 0) {
		console.log(c('gray', `\n  ℹ️  ${totalSkipped} package(s) skipped (pinned or major bumps).`));
	}
	console.log('');

	// ── Optional audit ─────────────────────────────────────────────────────
	if (RUN_AUDIT && !DRY_RUN) {
		console.log(bold('🔒  Running pnpm audit...\n'));
		try {
			execSync('pnpm audit', { cwd: ROOT, stdio: 'inherit' });
		} catch {
			// pnpm audit exits non-zero when vulnerabilities are found; that's expected
		}
		console.log('');
	}

	// Exit non-zero in dry-run mode if updates are pending (useful for CI checks)
	if (DRY_RUN && totalUpdates > 0) process.exit(1);
}

main().catch(err => {
	console.error(c('red', `\n❌  Fatal: ${err.message}`));
	process.exit(1);
});
