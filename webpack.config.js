const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "sema-engine.js",
		library: "sema-engine",
		libraryTarget: "umd",
	},
	externals: {
		nearley: {
			commonjs: "nearley",
			commonjs2: "nearley",
			amd: "nearley",
			root: "_",
		},
	},
};
