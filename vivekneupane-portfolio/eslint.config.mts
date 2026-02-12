import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
	{
		ignores: [
			".next/*",
			"node_modules/*",
			"dist/*",
			"build/*",
			"out/*",
			"public/*",
		],
	}, {
		files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		plugins: { 
			js,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			"@typescript-eslint": tseslint.plugin as any,
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			react: pluginReact as any,
		},
		languageOptions: {
			parser: tseslint.parser,
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			...js.configs.recommended.rules,
			...pluginReact.configs.flat.recommended.rules,
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn", {
					varsIgnorePattern: "^_",
					argsIgnorePattern: "^_",
					caughtErrorsIgnorePattern: "^_"
				},
			],
			"react/react-in-jsx-scope": "off",
			"react/prop-types": "off",
			"@typescript-eslint/no-explicit-any": "warn",
			// "@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/consistent-type-imports": ["error", {
				prefer: "type-imports",
				fixStyle: "inline-type-imports"
			}],
			"semi": ["error", "always"],
			// Disabled indent rule due to known bugs in ESLint 9.x causing stack overflow
			// Consider using Prettier or @stylistic/eslint-plugin instead
			"indent": ["error", "tab", { "SwitchCase": 1 }],
			"linebreak-style": ["error", "unix"],
			"quotes": ["error", "double", { "avoidEscape": false }],
			"curly": ["error", "all"],
			"object-curly-spacing": ["error", "always"],
		},
	},
]);
