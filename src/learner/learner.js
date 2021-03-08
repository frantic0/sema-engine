
import Dispatcher from "../common/dispatcher.js";

// here we use the default pattern but any RegEx can be configured
import mlworker from 'web-worker:./worker.js';

/**
 * The Learner class encapsulates a worker thread
 * and does async initialization and manages all async communication with it
 * @class Learner
 * TODO more error handling
 * TODO more checking of arguments passed to methods
 */
export class Learner {
	/**
	 * @constructor
	 */
	constructor() {
		// Manager of events subscrition and emission, that should be subscribed by SAB receivers
		this.dispatcher = new Dispatcher();
	}

	/**
	 * Learner's event subscription
	 * @addEventListener
	 * @param {*} event
	 * @param {*} callback
	 */
	addEventListener(event, callback) {
		if (this.dispatcher && event && callback)
			this.dispatcher.addEventListener(event, callback);
		else throw new Error("Error adding event listener to Learner");
	}

	removeEventListner(event, callback) {
		if (this.dispatcher && event && callback)
			this.dispatcher.removeEventListener(event, callback);
		else throw new Error("Error removing event listener to Learner");
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
					console.info("running Learner");
					resolve(result);
					this.worker.onmessage = this.onMessageHandler;
				};
			}
		});
	}

	onMessageHandler = (e) => {
		this.dispatcher.dispatch("onSharedBuffer", e.data);
		console.log("onSharedBuffer");
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
	addSharedBuffer(e) {
		if (this.worker && e && e.sab && e.sab instanceof SharedArrayBuffer) {
			this.worker.postMessage({
				sab: e.sab,
				blocksize: e.blocksize,
				channelID: e.channelID,
			});
		} else throw new Error("Error pushing SharedBuffer in Learner");
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
	 */
	terminate() {
		this.worker.terminate();
		this.worker = null; // make sure it is deleted by GC
	}
}
