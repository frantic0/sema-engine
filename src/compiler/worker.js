import nearley from 'nearley';
import moo from 'moo';
import semaa from './sema.js';
// import cloneDeep from "lodash.cloneDeep";




export function evalToGlobalScope(source) {
	// let moo = mooo; //  `let` local scope, works with eval – does NOT work with Geval
	self.moo = mooo; //  global scope, works with Geval
	// let sema = semaa; // does NOT work with Geval, works with eval
	self.sema = semaa; // global scope, works with Geval
	sema.num("3"); // hack to force the module to load before eval
	let module = { exports: "" };
	// eval(source);
	var geval = eval; // eval in the global scope, avoiding rollup warning - https://rollupjs.org/guide/en/#avoiding-eval
	geval(source); // does NOT work with geval – ReferenceError: moo is not defined
	// inject parser in window.grammar
}


function getParserModuleExports(source) {
  let mooo = moo;
  let sema = semaa;
  sema.num("3");
	let module = { exports: '' };
	eval(source);
	return module.exports;
}

const clone = (a) => JSON.parse(JSON.stringify(a))


onmessage = function(m) {
  if ( m && m.data ){
		try {
			let parserOutputs = [];
			const { liveCodeSource, parserSource } = m.data;

			// let parser = new nearley.Parser(getParserModuleExports(parserSource));

			evalToGlobalScope(parserSource);
      let parser = new nearley.Parser(self.grammar);

      parser.feed(liveCodeSource);

			// parserOutputs = JSON.parse(JSON.stringify(parser.results));

      postMessage({
        output: parser.results,
			});

    } catch (e) {
			console.error(e);
			postMessage(e.message); // This sends parse errors caught with exception to the client for visibility! Do not remove!
		}
	}
};
