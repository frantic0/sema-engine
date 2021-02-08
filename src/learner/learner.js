// here we use the default pattern but any RegEx can be configured
// import mlworker from 'web-worker:./mlworker.js';
import mlworker from 'web-worker:./worker.js';
import * as Comlink from "../../node_modules/comlink/dist/esm/comlink.mjs";

export class Learner {
	/**
	 * @constructor
	 * @param {*} url
	 * @param {*} sab
	 */
	constructor() {
		// const worker = new mlworker({ type: "module" });

    // Event emitter that should be subscribed by SAB receivers
		this.onSharedBuffer = e => {
			sab: e.data.sab
		};
	}

	/**
	 * Initialises worker with origin URL
	 * @param {*} url
	 * @param {*} sab
	 */
	async init(url) {
		this.worker = new mlworker();

		return new Promise((resolve, reject) => {
			let result = {};
			if (this.worker && new URL(url)) {
				this.worker.postMessage({ url });
				this.worker.onerror = this.onErrorHandler;
				this.worker.onmessage = (e) => {
          result = e.data.init;
          resolve(result);
					this.worker.onmessage = this.onMessageHandler;
				};
			}
		});
	}

	onSharedBuffer = e => {
		sab: e.data.sab
	};

	onMessageHandler = e => {
		if (e.data);
		this.onSharedBuffer(e.data);
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
	eval(expression) {
		if (this.worker && expression)
			this.worker.postMessage({ eval: expression });
		//console.log("DEBUG:ModelEditor:evalModelEditorExpression: " + code);
		// window.localStorage.setItem("modelEditorValue", codeMirror.getValue());
		// addToHistory("model-history-", modelCode);
	}

	/**
	 *
	 * @param {*} sab
	 * @param {*} blocksize
	 * @param {*} channelID
	 */
	createSharedBuffer(e) {
		if (this.worker && e.sab && e.blocksize && e.channelID) {
			this.worker.postMessage({ sab, blocksize, channelID });
		}
	}

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
