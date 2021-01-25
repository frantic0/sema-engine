/**
 * sema-engine library interface
 */
export { Engine } from './engine/engine.js';
import compileGrammar from './compiler/compiler.js';
import ASTreeToJavascript from "./compiler/IR.js";
import semaa from './compiler/sema.js';
import nearley from "../node_modules/nearley/lib/nearley.js";
import mooo from "../node_modules/moo/moo.js";

function getParserModuleExports(source) {
	let moo = mooo;
	let sema = semaa;
	let module = { exports: "" };
	// var eval2 = eval; // avoiding rollup warning - https://rollupjs.org/guide/en/#avoiding-eval
	eval(source);
	return module.exports;
}
/**
 * Given the grammar code, compiles the livecode
 * @param {*} grammar
 * @param {*} livecode
 */
export function compile(grammar, code){
  let dspCode;
  let { errors, output } = compileGrammar(grammar);
  let compiledParser = new nearley.Parser(getParserModuleExports(output));

  if(!errors && compiledParser){
    const livecodeParseTree = compiledParser.feed(code);

    if(livecodeParseTree){
      dspCode = ASTreeToJavascript.treeToCode(livecodeParseTree, 0);
    }
  }
  // parserOutputs = JSON.parse(JSON.stringify(parser.results));
  // console.log(parser.results)
  return { errors, dspCode };
}
