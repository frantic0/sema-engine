// here we use the default pattern but any RegEx can be configured
import mlworker from 'web-worker:./mlworker.js';
// import mlworker from 'web-worker:./ml.worker.js';
import * as Comlink from "../../node_modules/comlink/dist/esm/comlink.mjs";

export class Learner {
	/**
	 * @constructor
	 * @param {*} url
	 * @param {*} sab
	 */
	constructor() {
		// const worker = new mlworker({ type: "module" });
	}

	// /**
	//  * Initialises worker with origin URL
	//  * @param {*} url
	//  * @param {*} sab
	//  */
	// init(url) {
	// 	this.worker = new mlworker();
	// 	this.worker.onmessage = this.onMessageHandler;
	// 	this.worker.onerror = this.onErrorHandler;

	//   if (this.worker && new URL(url)) {
	// 		this.worker.postMessage({ url });
	// 	}
	// }

	async init(url) {
		// WebWorkers use `postMessage` and therefore work with Comlink.
		const MLWorker = Comlink.wrap(new mlworker());
		this.worker = await new MLWorker(url);

		if (this.worker && new URL(url)) {
			await this.worker.loadScripts(url);
			return true;
		}
		// alert(`Counter: ${await obj.counter}`);
		// await obj.inc();
		// alert(`Counter: ${await obj.counter}`);
	}

	/**
	 *
	 */
	eval(expression) {
		this.worker.eval(expression);
		// this.worker.postMessage({ eval: expression });
		//console.log("DEBUG:ModelEditor:evalModelEditorExpression: " + code);
		// window.localStorage.setItem("modelEditorValue", codeMirror.getValue());
		// addToHistory("model-history-", modelCode);
	}

	onMessageHandler = (e) => {
		e.data.isI;
		console.log("onMsg");
		console.log(e);
	};

	onErrorHandler = (e) => {
		console.log("onError");
		console.log(e);
	};

	/**
	 *
	 */
	createOutputChannel() {}

	evalBlock(block) {
		// let modelCode = codeMirror.getBlock();
		// console.log(modelCode);
		let linebreakPos = block.indexOf("\n");
		let firstLine = block.substr(0, linebreakPos);
		// console.log(firstLine);
		if (firstLine == "//--DOM") {
			block = block.substr(linebreakPos);
			evalDomCode(block);
			addToHistory("dom-history-", block);
		} else {
			this.worker.postMessage({ eval: block });
			// console.log("DEBUG:ModelEditor:evalModelEditorExpressionBlock: " + code);
			window.localStorage.setItem("modelEditorValue", codeMirror.getValue());
			addToHistory("model-history-", block);
		}
	}

	/**
	 *
	 * @param {*} callback
	 */
	subscribe(callback) {
		this.worker.onmessage;
	}

	/**
	 *
	 */
	terminate() {
		this.worker.terminate();
		this.worker = null; // make sure it is deleted by GC
	}
}
