/**
 * sema-engine library interface
 * * exports the Engine class and all its public methods
 * @Engine
 * @compile
 */
export { Engine } from './engine/engine.js';
export {
	compile,
	compileGrammar,
	getParserModuleExports
} from "./compiler/compiler.js";
// import compileGrammar from './compiler/compiler.js';
export * as ASTreeToJavascript from "./compiler/IR.js";
export { nearley } from "../node_modules/nearley/lib/nearley.js";
export { mooo } from "../node_modules/moo/moo.js";
export { semaa } from "./compiler/sema.js";

// here we use the default pattern but any RegEx can be configured
import  mlworker from 'web-worker:./learning/ml.worker.js';

export function createLearner(url, sab){

  const worker = new mlworker();
  // const worker = new mlworker({ type: "module" });
  worker.postMessage({
		url: url,
    sab: sab
	});
  return worker;
}

// mlworker.postMessage(e);