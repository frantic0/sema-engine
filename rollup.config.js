import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";

export default [
	// browser-friendly UMD build
	{
		input: "src/main.js",
		output: {
			name: "sema-engine",
			// sourcemap: process.env.BUNDLE_TYPE !== "minified", // Check how to minify https://github.com/dropbox/dropbox-sdk-js/blob/main/rollup.config.js
			file: pkg.browser,
			format: "umd",
		},
		plugins: [
			resolve(), // so Rollup can find `nearley`
			commonjs(), // so Rollup can convert `nearley` to an ES module
      terser(),
		],
	},

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	{
		input: "src/main.js",
		external: ["nearley"],
		output: [
			{ file: pkg.main, format: "cjs" },
			{ file: pkg.module, format: "es" },
		],
	},
];
