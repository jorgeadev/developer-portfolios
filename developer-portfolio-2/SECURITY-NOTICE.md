# ℹ️ SECURITY STATUS - developer-portfolio-2

## Current Security Status

This portfolio template has been assessed for security vulnerabilities. The current status is:

### Vulnerabilities Fixed:

- ✅ **nth-check (CVE-2021-3803)**: Inefficient Regular Expression Complexity — fixed via `pnpm.overrides` pinning `nth-check@^2.1.1`

### Important Notes:

- ✅ **Production builds are safe** — these vulnerabilities are in development dependencies only
- ✅ **The application builds and runs correctly** using `pnpm run build`
- ⚠️ **react-scripts is the root cause** — it pins old transitive dependencies (nth-check, svgo, webpack-dev-server) that cannot be updated through normal dependency updates alone
- ⚠️ **`pnpm.overrides` is required** to force the patched version of `nth-check` because react-scripts locks its sub-dependencies internally

### Why Updating Dependencies Alone Didn't Fix It:

`react-scripts@5.x` has its own internal dependency graph that locks vulnerable packages at specific versions (e.g. `nth-check@1.0.2` via `@svgr/webpack → @svgr/plugin-svgo → svgo@1.3.2 → css-select@2.x`). Simply adding `webpack-dev-server` or `postcss` at newer versions in your project's `package.json` does not affect these deeply nested transitive dependencies. The `pnpm.overrides` field in `package.json` forces all instances of the affected package to use the safe version.

## Recommendations

### For Production Use:

1. ✅ **Safe to use in production** — `pnpm run build` creates secure production builds
2. ✅ **nth-check vulnerability patched** via pnpm overrides

### For Long-term Maintenance:

1. **Consider migrating from `react-scripts` to Vite** for a modern, actively maintained build toolchain
2. **Test thoroughly after any build toolchain migration**
3. **Set up Dependabot** for automated dependency update PRs

### Security Best Practices:

- Set up automated dependency updates (Dependabot)
- Regularly run `pnpm audit` to check for known vulnerabilities
- Keep dependencies up to date
- Use `pnpm run build` for production deployments

## Alternative Recommendation

Consider using one of the other portfolio templates in this repository that have up-to-date dependencies and no known vulnerabilities:

- `developer-portfolio/`
- `Tedydev-Portfolio/`
- `vivekneupane-portfolio/`

---

**This notice was last updated on:** March 2026
**Last security audit:** March 2026
