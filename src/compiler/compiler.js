


import nearley from "../../node_modules/nearley/lib/nearley.js";
import compileLowLevel from "./compiler-low-level.js";
import {
	ParserRules,
	ParserStart,
	Lexer
} from "../../node_modules/nearley/lib/nearley-language-bootstrapped.js";
import generate from "../../node_modules/nearley/lib/generate.js";
import lint from "../../node_modules/nearley/lib/lint.js";

import ASTreeToJavascript from "./IR.js";
import mooo from "../../node_modules/moo/moo.js";
import("../../node_modules/moo/moo.js");
import semaa from "./sema.js";

/**
 * Loads the modules dependencies in the compiled parser source code (moo, sema)
 * before dynamically loading it with eval
 * @param {*} source
 * * sema.num('3') is a hack to force the module to load before eval,
 * TODO need to check how the module is built differently from moo
 */

export function getModuleExports(source) {
	let moo = mooo; //  `let` local scope, works with eval – does NOT work with Geval
	let sema = semaa; // does NOT work with Geval, works with eval
	sema.num("3"); // hack to force the module to load before eval
	let module = { exports: "" };
	const encodedJs = encodeURIComponent(source);
	const dataUri = "data:text/javascript;charset=utf-8," + encodedJs;
	import(dataUri);
	return module.exports;
}

export function getParserModuleExports(source) {
	let moo = mooo; //  `let` local scope, works with eval – does NOT work with Geval
	let sema = semaa; // does NOT work with Geval, works with eval
	sema.num("3"); // hack to force the module to load before eval
	let module = { exports: "" };
	// eval(source); // works but gets flagged by Rollup!
	return module.exports;
}

export function evalToGlobalScope(source) {
	// let moo = mooo; //  `let` local scope, works with eval – does NOT work with Geval
	window.moo = mooo; //  global scope, works with Geval
	// let sema = semaa; // does NOT work with Geval, works with eval
	window.sema = semaa; // global scope, works with Geval
	sema.num("3"); // hack to force the module to load before eval
	let module = { exports: "" };
	// eval(source);
	var geval = eval; // eval in the global scope, avoiding rollup warning - https://rollupjs.org/guide/en/#avoiding-eval
	geval(source); // does NOT work with geval – ReferenceError: moo is not defined
  // inject parser in window.grammar
}

/**
 * Given a livecode's grammar source code, compile a livecode's source
 * @param {*} grammarSource
 * @param {*} livecodeSource
 */
export function compile(grammarSource, livecodeSource) {
	let dspCode;
	let sema = semaa;

	const { errors, output } = compileGrammar(grammarSource);

	// const grammar = getModuleExports(output);
	// const grammar = getParserModuleExports(output);
	// const compiledParser = new nearley.Parser(grammar);

	evalToGlobalScope(output);
	const compiledParser = new nearley.Parser(window.grammar);

	if (!errors && compiledParser) {
		const livecodeParseTree = compiledParser.feed(livecodeSource);
		if (livecodeParseTree) {
			dspCode = ASTreeToJavascript.treeToCode(livecodeParseTree.results, 0);
		}
	}
	return { errors, dspCode };
}


/*
  MIT License
  Copyright (c) 2019 Guillermo Webster
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function stream() {
	let out = "";
	return {
		write(str) {
			out += str;
		},
		dump() {
			return out;
		}
	};
}

function AnnotatePositions(rules) {
	return rules.map(
		rule =>
			new nearley.Rule(
				rule.name,
				rule.symbols,
				rule.postprocess &&
					((data, ref, reject) => {
						var orig = rule.postprocess(data, ref, reject);
						if (orig === null) return null;
						if (typeof orig == "object" && !orig.slice) {
							orig.pos = ref;
						}
						return orig;
					})
			)
	);
}

export function compileGrammar(grammar) {

	let parser = new nearley.Parser( AnnotatePositions(ParserRules), ParserStart, { lexer: Lexer } );

	let errors = stream();
	let output = "";
	let positions = {};

	try {
		parser.feed(grammar);
		if (parser.results[0]) {
			function rangeCallback(name, start, end) {
				positions[name] = [start, end];
			}
			var c = compileLowLevel(parser.results[0], {
				rangeCallback: rangeCallback
			});
			lint(c, { out: errors });

			output = generate(c, "grammar");
		}
	} catch (e) {
		errors.write(e);
	}

	return {
		errors: errors.dump(),
		positions,
		output
	};
}
