import resolve from "@rollup/plugin-node-resolve"; // allows us to load third-party modules in node_modules
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs"; // converts CommonJS modules to ES6, which stops them from breaking Rollup
import pkg from "./package.json";
import copy from "rollup-plugin-copy";
// import serve from "rollup-plugin-serve";
// serve does not support proxy, to use livereload.js wih CORS
// https://github.com/ionic-team/ionic-cli/issues/89
// https://github.com/thgh/rollup-plugin-serve/pull/40
import serve from "rollup-plugin-serve-proxy";
import livereload from "rollup-plugin-livereload";
import workerLoader from "rollup-plugin-web-worker-loader";
import sourcemaps from "rollup-plugin-sourcemaps";

const isDevelopment = !process.env.BUILD;

// Silence warning
const onwarn = (warning, warn) =>  {
	// suppress eval warnings
	if (warning.code === 'EVAL') return
	warn(warning)
}

const globals = {
  process: 'process',
  perf_hooks: 'perf_hooks',
  fs: 'fs',
  path: 'path',
  os: 'os',
  crypto: 'crypto',
  buffer: 'buffer',
  inspector: 'inspector'
}

export default [
	{
		input: "src/index.js",
		onwarn,
		output: [
			{
				file: pkg.module,
				format: "es",
				sourcemap: true,
				globals,
				// sourcemap: isDevelopment ? true : "inline", // generate sourcemap files if true
			},
			{
				file: pkg.main,
				format: "umd",
				name: "sema-engine",
				sourcemap: true,
				globals,
				// sourcemap: isDevelopment ? true : "inline",
			},
			{
				file: "sema-engine.min.js",
				format: "iife",
				name: "version",
				sourcemap: true,
				globals,
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
						// nodePolyfills(),
						// {
						// 	// debug the Rollup bundling process by injecting a hook in the plugin chain!
						// 	transform(code, id) {
						// 		console.log(id);
						// 		console.log(code);
						// 	}, // not returning anything, so doesn't affect bundle
						// },
						// terser(),
						// copy({
						// 	targets: [
						// 		{
						// 			src: "assets/*",
						// 			dest: "dist",
						// 		},
						// 	],
						// }),
						serve({
							open: true, // Launch in browser (default: false)
							openPage: "/test/index.html",
							verbose: true, // Show server address in console (default: true)
							contentBase: "", // Folder to serve files from
							historyApiFallback: false, // Set to true to return index.html (200) instead of error page (404)
							historyApiFallback: "/200.html", // Path to fallback page
							host: "localhost", // Options used in setting up server
							port: 9002, // Use this port in you VSCode
							mimeTypes: {
								// set custom mime types, usage https://github.com/broofa/mime#mimedefinetypemap-force--false
								"application/javascript": ["js"],
								"application/wasm": ["wasm"],
							},
							headers: {
								"Cross-Origin-Opener-Policy": "same-origin",
								"Cross-Origin-Embedder-Policy": "require-corp",
								"Cross-Origin-Resource-Policy": "cross-origin",
								"Access-Control-Allow-Origin": "*",
							},
							// proxy: {
							// 	livereload: "http://localhost:35729/livereload.js?snipver=1",
							// },
							// onListening: function (server) {
							// 	const address = server.getAddress();
							// 	const host = address.host === "::" ? "localhost" : address.host;
							// 	// by using a bound function, we can access options as `this`
							// 	const protocol = this.https ? "https" : "http";
							// 	console.log(
							// 		`Server listening at ${protocol}://${host}:${address.port}/`
							// 	);
							// },
						}),
						livereload({
							watch: "",
							verbose: true,
						}),
				  ]
				: [
						resolve(), // so Rollup can find `nearley` f e.g.
						commonjs(), // so Rollup can convert `nearley` to an ES module
						workerLoader(/* configuration */),
						// {
						// 	// debug the Rollup bundling process by injecting a hook in the plugin chain!
						// 	transform(code, id) {
						// 		console.log(id);
						// 		console.log(code);
						// 	}, // not returning anything, so doesn't affect bundle
						// },
						sourcemaps(),
						terser(),
						// copy({
						// 	targets: [
						// 		{
						// 			src: "assets/package.json",
						// 			dest: "dist",
						// 		},
						// 		{
						// 			src: "README.md",
						// 			dest: "dist",
						// 		},
						// 	],
						// }),
				  ]),
			// eslint({
			// 	/* your options */
			// }),
		],
	},
];

