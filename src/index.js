/**
 * sema-engine library interface
 */
export { Engine } from './engine/engine.js';
import compileGrammar from './compiler/compiler.js';
import ASTreeToJavascript from "./compiler/IR.js";
import nearley from "../node_modules/nearley/lib/nearley.js";
import mooo from "../node_modules/moo/moo.js";
import semaa from "./compiler/sema.js";
// import * as semaa from "./compiler/sema.js";
import ParserWorker from "web-worker:./compiler/parser.worker.js";

let parseLiveCodeAsync = async (compiledParser, livecodeSource) => {
  if(window.Worker){
    const parserWorker = new ParserWorker();
    let parserWorkerAsync = new Promise( (res, rej) => {

      parserWorker.postMessage({
				// Post code to worker for parsing
				liveCodeSource: livecodeSource,
				parserSource: compiledParser,
				type: "parse",
			});

      parserWorker.onmessage = m => {  // Receive code from worker, pass it to then
        if(m.data !== undefined){
          res(m.data);
        }
      }
    })
    .then(outputs => {
      const { parserOutputs, parserResults } = outputs;
      if( parserOutputs && parserResults ){
        // dspCode = ASTreeToJavascript.treeToCode(parserResults, 0);
      }
      else {
        // $liveCodeParseErrors = outputs;
        // $liveCodeAbstractSyntaxTree = $liveCodeParseResults = '';
      }
    })
    .catch(e => {
      // console.log('DEBUG:parserEditor:parseLiveCode:catch')
      // console.log(e);
      $liveCodeParseErrors = e;
    });

    parserWorker.terminate();
    parserWorker = null; // cannot delete in strict mod
  }
}

/**
 * Loads the modules dependencies in the compiled parser source code (moo, sema)
 * before dynamically loading it with eval
 * @param {*} source
 */
function getParserModuleExports(source) {
	let moo = mooo; //  local scope, works with eval – does NOT work with geval
	let sema = semaa; // does NOT work with eval, works with geval?
  sema.num('4');
	let module = { exports: "" };
	// var geval = eval; // eval in the global scope, avoiding rollup warning - https://rollupjs.org/guide/en/#avoiding-eval
	eval(source);
	return module.exports;
}


/**
 * Given the grammar code, compiles the livecode
 * @param {*} grammar
 * @param {*} livecode
 */
export function compile(grammarCode, livecode){

  let dspCode;
  let sema = semaa;

  const { errors, output } = compileGrammar(grammarCode);
  const grammar = getParserModuleExports(output);
  console.log(grammar);
  const compiledParser = new nearley.Parser(grammar);

  // let compiledParser = parseLiveCodeAsync(output, code);


  if(!errors && compiledParser){
    const livecodeParseTree = compiledParser.feed(livecode);

    if(livecodeParseTree){
      dspCode = ASTreeToJavascript.treeToCode(livecodeParseTree.results, 0);
    }
  }


  // parserOutputs = JSON.parse(JSON.stringify(parser.results));
  // console.log(parser.results)
  return { errors, dspCode };
}
