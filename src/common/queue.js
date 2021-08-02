class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(item){
		if(item)
			this.items.push(item);
	}

	dequeue(){
		if(this.items.lenght === 0)
			throw new Error("Underflow");
		else
			return this.items.shift();
	}
}