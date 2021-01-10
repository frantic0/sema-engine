export { AudioEngine } from './engine/audioEngine.js';
import Maximilian from 'maximilian-wasm/maximilian.wasm';

console.log(Maximilian);
// This fails because it is not importing Nearley node module
// export { compile } from '../src/compiler/compiler.js';