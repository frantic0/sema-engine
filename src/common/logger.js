import Dispatcher from './dispatcher.js';

export class Logger {
	/**
	 * @constructor
	 */
	constructor() {
		if (Logger.instance) {
			return Logger.instance; // Singleton pattern
		}
		Logger.instance = this;

		this.log = [];
		this.rawLog = ""; //raw log of string data

		this.dispatcher = new Dispatcher();
		this.cl;
		this.ci;
		this.cw;
		this.ce;
	}

	//pass in svelte store, of log
	// setStore(storeLog){
	// 	storeLog.set = this.rawLog;
	// }


	addEventListener(event, callback) {
		// console.log("registering", event, callback);
		if (this.dispatcher && event && callback){
			this.dispatcher.addEventListener(event, callback);
			// console.log("registered");
		}
		else throw new Error("Error adding event listener to Logger");
	}


	push(data){
		this.log.push(data);
		this.rawLog = this.rawLog + "\n" + data.type + " " + [...data.payload].join();
		this.dispatcher.dispatch("onLog");
		//console.log("getting dispatched", this.rawLog);
		//this.dispatcher.dispatch("onConsoleLogsUpdate", {test:10});
	}

	//console.log = overrideConsoleLog();

	takeOverConsole(){
		if (window.console) {
			if (window.console.log) this.cl = console.log;
			if (window.console.info) this.ci = console.info;
			if (window.console.warn) this.cw = console.warn;
			if (window.console.error) this.ce = console.error;
			if(this.cl && this.ci && this.cw && this.ce){
				this.cw("taking over MAIN console");
				console.log = function () {
					window.postMessage({
						func: "logs",
						payload: [...arguments],
						type: "[MAIN]",
					});
					this.cl.apply(this, arguments);
				};
				console.info = function (text) {
					window.postMessage({
						func: "logs",
						payload: [...arguments],
						type: "[MAIN]",
					});
					this.ci.apply(this, arguments);
				};
				console.warn = function (text) {
					window.postMessage({
						func: "logs",
						payload: [...arguments],
						type: "[MAIN]",
					});
					this.cw.apply(this, arguments);
				};
				console.error = function (text) {
					window.postMessage({
						func: "logs",
						payload: [...arguments],
						type: "[MAIN]",
					});
					ce.apply(this, arguments);
				};
				this.ce("MAIN console taken over");
			}
		}
	}


	// takeOverConsole(f) {
	// 	if (f) {
	// 		try {
	// 			var original = window.console;

	// 			function handle(method, args) {
	// 				var message = Array.prototype.slice.apply(args).join(" ");
	// 				if (original) original[method]("> " + message);
	// 			}

	// 			window.console = {
	// 				log: function () {
	// 					handle("log", arguments);
	// 				},
	// 				warn: function () {
	// 					handle("warn", arguments);
	// 				},
	// 				error: function () {
	// 					handle("error", arguments);
	// 				},
	// 				info: function () {
	// 					handle("info", arguments);
	// 				},
	// 			};
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// }

}
