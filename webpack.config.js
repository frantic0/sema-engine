const path = require("path");

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "sema-engine.js",
		library: "sema-engine", //  make library available for consumption in different environments
		libraryTarget: "umd",
		auxiliaryComment: {
			root: "Root Comment",
			commonjs: "CommonJS Comment",
			commonjs2: "CommonJS2 Comment",
			amd: "AMD Comment",
		},
	},
	// externals: {
	// 	nearley: {
	// 		commonjs: "nearley",
	// 		commonjs2: "nearley",
	// 		amd: "nearley",
	// 		root: "nearley",
	// 	},
	// },
	module: {
		rules: [
			{
				test: /\.worker\.js/,
				use: {
					loader: "worker-loader",
					options: { fallback: true },
				},
			},
			{
				// test: /\.(jpg|png|svg)$/,
				test: /\.wasmmodule.js$/,
				loader: "url-loader",
				options: {
					limit: Infinity, // everything
				},
			},
			{
				test: /maxi-processor.js/,
				loader: "file-loader", // files should NOT get processed, only emitted
				options: {
					name: "maxi-processor.js",
				},
			},
			{
				test: /ringbuf.js/,
				loader: "file-loader", // files should NOT get processed, only emitted
				options: {
					name: "ringbuf.js",
				},
			},
			{
				test: /\.wasm$/,
				type:
					"javascript/auto" /** this disables webpacks default handling of wasm */,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "wasm/[name].[hash].[ext]",
							publicPath: "/dist/",
						},
					},
				],
			},
		],
	},
};