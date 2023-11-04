class QueueNode<T> {
	value: T;
	next?: QueueNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}
}

class Queue<T> {
	first: QueueNode<T> | null;
	last: QueueNode<T> | null;
	length: number;

	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	peek() {
		return this.first?.value;
	}

	enqueue(value: T): T {
		const newNode = new QueueNode(value);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last!.next = newNode;
			this.last = newNode;
		}
		this.length++;

		return newNode.value;
	}

	dequeue() {
		if (!this.first) return null;

		const dequeueValue = this.first.value;
		this.first = this.first.next as QueueNode<T>;
		this.length--;

		return dequeueValue;
	}

	printQueue(): T[] | null {
		if (!this.first) return null;
		const list: T[] = [];

		let currentNode = this.first;
		while (currentNode?.next) {
			list.push(currentNode.value);
			currentNode = currentNode.next;
		}
		list.push(currentNode!.value);

		return list;
	}

	size(): number {
		return this.length;
	}

	isEmpty() {
		return !this.last;
	}
}

const queue = new Queue<number>();

queue.enqueue(100);
queue.enqueue(200);
queue.enqueue(300);
queue.enqueue(400);
queue.enqueue(500);

console.log(queue.dequeue());
console.log(queue.printQueue());
console.log(queue.size());
console.log(queue.peek());
