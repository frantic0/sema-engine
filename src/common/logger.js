import Dispatcher from './dispatcher.js';

// var cl, ci, cw, ce;

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
		this.types = {main: "[MAIN]", processor:"[PROCESSOR]", learner:"[LEARNER]"}

		this.dispatcher = new Dispatcher();
	}



	//pass in svelte store, of log
	// setStore(storeLog){
	// 	storeLog.set = this.rawLog;
	// }

	addEventListener(event, callback) {
		// console.log("registering", event, callback);
		if (this.dispatcher && event && callback) {
			this.dispatcher.addEventListener(event, callback);
			// console.log("registered");
		} else throw new Error("Error adding event listener to Logger");
	}

	push(data) {
		this.log.push(data);
		this.rawLog =
		this.rawLog + "\n" + data.type + " " + [...data.payload].join();
		this.dispatcher.dispatch("onLog");
		//console.log("getting dispatched", this.rawLog);
		//this.dispatcher.dispatch("onConsoleLogsUpdate", {test:10});
	}

	//clears all logs
	clear(){
		this.log = [];
		this.rawLog = "";
	}

	//console.log = overrideConsoleLog();

	takeOverConsole() {
		if (window.console) {
// this.onMessageHandler.bind(this);
			let cl, ci, cw, ce;

			if (window.console.log) cl = console.log;
			if (window.console.info) ci = console.info;
			if (window.console.warn) cw = console.warn;
			if (window.console.error) ce = console.error;
			if (cl && ci && cw && ce) {
				cw("taking over MAIN console");

				console.log = function (text) {
					this.push({
						func: "logs",
						payload: [...arguments],
						type: "log",
						source: this.types.main,
					});
					cl.apply(this, arguments);
				}.bind(this);

				console.info = function (text) {
					this.push({
						func: "logs",
						payload: [...arguments],
						type: "info",
						source: this.types.main,
					});
					ci.apply(this, arguments);
				}.bind(this);

				console.warn = function (text) {
					// window.postMessage({
					this.push({
						func: "logs",
						payload: [...arguments],
						type: "warn",
						source: this.types.main,
					});
					cw.apply(this, arguments);
				}.bind(this);

				console.error = function (text) {
					// window.postMessage({
					this.push({
						func: "logs",
						payload: [...arguments],
						type: "error",
						source: this.types.main,
					});
					ce.apply(this, arguments);
				}.bind(this);

				ce("MAIN console taken over");
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
