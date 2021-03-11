import resolve from "@rollup/plugin-node-resolve"; // allows us to load third-party modules in node_modules
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs"; // converts CommonJS modules to ES6, which stops them from breaking Rollup
import pkg from "./package.json";
import copy from "rollup-plugin-copy";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import workerLoader from "rollup-plugin-web-worker-loader";
import sourcemaps from "rollup-plugin-sourcemaps";
// import eslint from "@rollup/plugin-eslint";

const isDevelopment = !process.env.BUILD;

// Silence warning
const onwarn = (warning, warn) =>  {
	// suppress eval warnings
	if (warning.code === 'EVAL') return
	warn(warning)
}


export default [

	{
		input: "src/index.js",
    onwarn,
		output: [
			{
				file: pkg.module,
				format: "es",
				sourcemap: true
				// sourcemap: isDevelopment ? true : "inline", // generate sourcemap files if true
			},
			{
				file: pkg.main,
				format: "umd",
				name: "sema-engine",
				sourcemap: true
				// sourcemap: isDevelopment ? true : "inline",
			},
			{
				file: "dist/sema-engine.min.js",
				format: "iife",
				name: "version",
				sourcemap: true
				// sourcemap: isDevelopment ? true : "inline", // do not generate sourcemap files if true
				// plugins: [terser()],
			},
		],
		plugins: [
			...(isDevelopment
				? [
						resolve(), // so Rollup can find `nearley`
						commonjs(), // so Rollup can convert `nearley` to an ES module
						workerLoader(),
						// {
						//// debug the Rollup bundling process by injecting a hook in the plugin chain!
						// 	transform(code, id) {
						// 		console.log(id);
						// 		console.log(code);
						// 	}, // not returning anything, so doesn't affect bundle
						// },
						terser(),
						copy({
							targets: [
								{
									src: "src/engine/maxi-processor.js",
									dest: "dist",
								},
								{
									src: "src/engine/sema-engine.wasmmodule.js",
									dest: "dist",
								},
								{
									src: "src/engine/open303.wasmmodule.js",
									dest: "dist",
								},
								{
									// ringbuf is imported by both the Engine (AW node) and maxi-processor (AWP) so needs to be both bundled AND copied!
									src: "src/common/ringbuf.js",
									dest: ["dist"],
								},
								{
									// transducers is imported by Engine maxi-processor (AWP) so needs to be both bundled AND copied!
									src: "src/engine/transducers.js",
									dest: ["dist"],
								},
								{
									src: "assets/*",
									dest: "dist",
								},
								{
									// lalolib is imported dynamically (importScripts) by the ml.worker, needs to be served in 'dist'
									src: "src/learning/lalolib.js",
									dest: "dist",
								},
								{
									// svd is imported dynamically (importScripts) by the ml.worker, needs to be served in 'dist'
									src: "src/learning/svd.js",
									dest: ["dist"],
								},
							],
						}),
						serve({
							open: false, // Launch in browser (default: false)
							verbose: true, // Show server address in console (default: true)
							contentBase: "dist", // Folder to serve files from
							historyApiFallback: false, // Set to true to return index.html (200) instead of error page (404)
							historyApiFallback: "/200.html", // Path to fallback page
							host: "localhost", // Options used in setting up server
							port: 9002, // Use this port in you VSCode
							mimeTypes: {
								// set custom mime types, usage https://github.com/broofa/mime#mimedefinetypemap-force--false
								"application/javascript": ["js"],
								"application/wasm": ["wasm"],
							},
						}),
						livereload({
							watch: "dist",
							verbose: true,
						}),
				  ]
				: [
						resolve(), // so Rollup can find `nearley` f e.g.
						commonjs(), // so Rollup can convert `nearley` to an ES module
						workerLoader(/* configuration */),
						sourcemaps(),
						terser(),
						copy({
							targets: [
								{
									src: "assets/package.json",
									dest: "dist",
								},
								{
									src: "README.md",
									dest: "dist",
								},
								{
									src: "src/engine/maxi-processor.js",
									dest: "dist",
								},
								{
									src: "assets/sema-engine.wasmmodule.js",
									dest: "dist",
								},
								{
									src: "assets/open303.wasmmodule.js",
									dest: "dist",
								},
								{
									// transducers is imported by Engine maxi-processor (AWP) so needs to be both bundled AND copied!
									src: "src/engine/transducers.js",
									dest: ["dist"],
								},
								{
									// ringbuf is imported by both the Engine (AW node) and maxi-processor (AWP) so needs to be both bundled AND copied!
									src: "assets/ringbuf.js",
									dest: ["dist"],
								},
								{
									// ringbuf is imported by both the Engine (AW node) and maxi-processor (AWP) so needs to be both bundled AND copied!
									src: "assets/mlworkerscripts.js",
									dest: ["dist"],
								},
								{
									// lalolib is imported dynamically (importScripts) by the ml.worker, needs to be served in 'dist'
									src: "assets/lalolib.js",
									dest: "dist",
								},
								{
									// svd is imported dynamically (importScripts) by the ml.worker, needs to be served in 'dist'
									src: "assets/svd.js",
									dest: ["dist"],
								},
							],
						}),
				  ]),
			// eslint({
			// 	/* your options */
			// }),
		],
	},

	// {
	// 	input: "src/engine/maxi-processor.js",
	// external: ["nearley"],
	// 	output: [
	// 		{ file: "dist/sema-engine.processor.js", format: "es", sourcemap: true },
	// 	],
	// },

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify
	// `file` and `format` for each target)
	// {
	// 	input: "src/index.js",
	// 	// external: ["nearley"],
	// 	output: [
	// 		{ file: pkg.main, format: "cjs" },
	// 		{ file: pkg.module, format: "es" },
	// 	],
	// },
];

