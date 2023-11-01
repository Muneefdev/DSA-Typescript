class StackNode<T> {
	value: T;
	next?: StackNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}
}

class Stack<T> {
	top: StackNode<T> | null;
	bottom: StackNode<T> | null;
	length: number;

	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top?.value;
	}

	push(value: T): StackNode<T> | null {
		const newNode = new StackNode(value);
		if (!this.top) {
			this.bottom = newNode;
			this.top = newNode;
		} else {
			this.top.next = newNode;
			this.top = newNode;
		}
		this.length++;

		return newNode;
	}

	traverseToIndex(index: number): StackNode<T> {
		let count = 0;

		let currentNode = this.bottom;
		while (count !== index) {
			if (currentNode?.next) {
				currentNode = currentNode.next as StackNode<T>;
			}
			count++;
		}

		return currentNode as StackNode<T>;
	}

	pop() {
		if (!this.bottom) return null;
		let currentNode = this.traverseToIndex(this.length - 2);
		let popValue = currentNode.next?.value;

		this.top = currentNode;
		currentNode.next = null;
		this.length--;

		return popValue;
	}

	printStack(): T[] | null {
		if (!this.bottom) return null;
		const list: T[] = [];

		let currentNode = this.bottom;
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
		return !this.bottom;
	}
}

const stack = new Stack<number>();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.push(500);
console.log(stack.pop());

console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.printStack());
console.log(stack.size());
