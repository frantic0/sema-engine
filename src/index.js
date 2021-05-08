/**
 * sema-engine library interface
 * * exports the Engine class and all its public methods
 * @Engine
 */
export {
  Engine
  } from './engine/engine.js';

/**
 * * exports high-level and more granular compiler utilities
 * @compile
 */
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

/**
 * sema-engine library interface
 * * exports the Learner class and all of its public methods
 * @Learner
 */
export { Learner } from "./learner/learner.js";

export { getBlock } from "./common/blockTracker.js";


export function takeOverConsole(f) {

	var original = window.console;

  function handle(method, args) {
		var message = Array.prototype.slice.apply(args).join(" ");
		if (original) original[method]('> ' + message);
	}

  window.console = {
		log: function () {
			handle("log", arguments);
		},
		warn: function () {
			handle("warn", arguments);
		},
		error: function () {
			handle("error", arguments);
		},
		info: function () {
			handle("info", arguments);
		},
	};
}