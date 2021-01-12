/* global Module */

"use strict";

console.log(
	"running%c maximilian-wasm v.0.0.1 (Wasm)",
	"font-weight: bold; background: #000; color: #bada55"
);

//NOTE: This is the main thing that post.js adds to Maximilian setup, a Module export definition which is required for the WASM design pattern
export default Module;

