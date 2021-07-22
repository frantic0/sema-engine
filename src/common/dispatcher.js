import Event from './event.js';

export default class Dispatcher {

  constructor() {
		this.events = {};
	}

	dispatch(eventName, data) {
		// console.log("dispatch is getting called.");
		const event = this.events[eventName];
		//let event = Event()

		// console.log("event", this.events, "data", data);
		// console.log("data", data, event);
		if (event) {
			// console.log("data being emitted", data)
			event.emit(data);
		}
	}

	addEventListener(eventName, callback) {
		let event = this.events[eventName];
		if (!event) {
			event = new Event(eventName);
			this.events[eventName] = event;
		}
		event.registerCallback(callback);
	}

	removeEventListener(eventName, callback) {
		const event = this.events[eventName];
		if (event && event.callbacks.indexOf(callback) > -1) {
			event.unregisterCallback(callback);
			if (event.callbacks.length === 0) {
				delete this.events[eventName];
			}
		}
	}
}
