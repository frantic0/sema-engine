import Event from './event.js';

export default class Dispatcher {

  constructor() {
		this.events = {};
	}

	dispatch(eventName, data) {
		const event = this.events[eventName];
		if (event) {
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
