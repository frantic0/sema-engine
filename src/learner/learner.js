
import Dispatcher from "../common/dispatcher.js";

// here we use the default pattern but any RegEx can be configured
import mlworker from 'web-worker:./worker.js';

import {Logger} from "../logger/logger.js";

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
		this.logger = new Logger();
		
		/*
		//console.log("this is the logger", this.logger);
		if (this.logger != undefined){
			var console = {}
			
			console.log = function(text){ 
				this.logger.push({text:text}); 
			}

			console.error = function(text){
				this.logger.push({text:text});
			}

			console.warn = function(text){
				this.logger.push({text:text});
			}

			console.info = function(text){
				this.logger.push({text:text});
			}
			//console.log("testttt");
		}
		*/
		
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

	removeEventListener(event, callback) {
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
		// this.dispatcher = new Dispatcher();
		this.worker = new mlworker();
		//this.logger = new Logger(); //make a logger instance

		//console.log("TEST CONSOLE TAKEOVER IN LEARNER");

		return new Promise( (resolve, reject) => {
			let result = {};
			if (this.worker && new URL(url)) {

				this.worker.postMessage({ url });

				this.worker.onerror = e => {
					console.log("onError");
          reject(e);
        };

				this.worker.onmessage = e => {
					result = e.data.init;
					console.info("running Learner");
					resolve(result);
					// this.worker.onmessage = this.onMessageHandler;
					this.worker.onmessage = this.onMessageHandler.bind(this);
				};

			}
		});
	}

	onMessageHandler(m){

		// data is a property of postMessage. func is then a property of data sent in our messages.
		if ( m && m.data && m.data.func ) {

			let responders = {

				sab: (data) => {
					// Publish data to audio engine
					this.dispatcher.dispatch("onSharedBuffer", data);
				},
				sendbuf: (data) => {
					// Publish data to audio engine
					this.dispatcher.dispatch("onSharedBuffer", data);
				},
				save: (data) => {
					// console.log("save");
					window.localStorage.setItem(data.name, data.val);
				},
				load: (data) => {
					// console.log("load");
					let msg = {
						name: data.name,
						val: window.localStorage.getItem(data.name),
					};
					modelWorker.postMessage(msg);
				},
				download: (data) => {
					// console.log("download");
					let downloadData = window.localStorage.getItem(data.name);
					let blob = new Blob([downloadData], {
						type: "text/plain;charset=utf-8",
					});
					saveData(blob, `${data.name}.data`);
				},
				sendcode: (data) => {
					// console.log(data);
				},
        // DEPRECATED
        data: () => {
					// Publish data to audio engine
					// messaging.publish("model-output-data", data);
				},
				pbcopy: (data) => {
					copyToPasteBuffer(data.msg);
					// let copyField=document.getElementById("hiddenCopyField");
					// copyField.value = data.msg;
					// copyField.select();
					// document.execCommand("Copy");
				},
				envsave: (data) => {
					messaging.publish("env-save", data);
				},
				envload: (data) => {
					messaging.publish("env-load", data);
				},
				domeval: (data) => {
					evalDOMCode(data.code);
				},
				peerinfo: (data) => {
					messaging.publish("peerinfo-request", {});
				},
				// data from the worker.js for the logger widget
				logs: (data) => {
					//console.log(">", data.text); //for now just log to console and have it captured here.
					this.logger.push(data); //recieve data from the worker.js and push it to the logger.

				}
			};

			responders[m.data.func](m.data);

    } else if (m.data !== undefined && m.data.length != 0) {
			res(m.data);
		}
		// clearTimeout(timeout);
	};

	// onMessageHandler = (e) => {
	// 	this.dispatcher.dispatch("onSharedBuffer", e.data);
	// 	// console.info("sending shared buffer");
	// 	// console.log(e);
	// };


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
		this.worker.onmessage = null; // remove event handler subscription
		this.worker.terminate();
		this.worker = null; // make sure it is deleted by GC
	}
}
