// NOTE: We don't need to conflate the WASM with utils for loading samples, so we segregate them from post.js
// import Module from '../build/maximilian.wasmmodule.js';
// import {
//   loadSampleToArray
// } from '../build/maximilian.wasmmodule.js';
import { loadSampleToArray } from "../../build/index";

window.loadSampleToArray = loadSampleToArray;
