class ListNode<T> {
	value: T;
	next?: ListNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList<T> {
	head: ListNode<T>;
	tail: ListNode<T>;
	length = 0;

	constructor(value: T) {
		this.head = new ListNode(value);
		this.head.next = null;
		this.tail = this.head;
		this.length++;
	}

	append(value: T) {
		let newNode = new ListNode(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	prepend(value: T) {
		let newNode = new ListNode(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}

	printList() {
		const array: T[] = [];
		let currentNode = this.head;
		while (currentNode.next) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		array.push(this.tail.value);

		return array;
	}

	traverseToIndex(index: number): ListNode<T> {
		let count = 0;
		let currentNode = this.head;

		while (count !== index) {
			currentNode = currentNode.next as ListNode<T>;
			count++;
		}

		return currentNode;
	}

	insert(index: number, value: T) {
		if (index >= this.length) return this.append(value);
		if (index === 0) return this.prepend(value);
		const newNode = new ListNode(value);

		const target = this.traverseToIndex(index - 1);
		newNode.next = target?.next;
		target!.next = newNode;
		this.length++;

		return this;
	}

	pop() {
		const target = this.traverseToIndex(this.length - 2);
		target.next = null;
		this.tail = target;
		this.length--;

		return this;
	}

	shift() {
		this.head = this.head.next as ListNode<T>;
		this.length--;

		return this.printList();
	}

	remove(index: number) {
		if (index < this.length) return this.shift();
		if (index >= this.length) return this.pop();

		const target = this.traverseToIndex(index - 1);
		target.next = target.next?.next;
		this.length--;

		return this;
	}

	reverse() {
		if (!this.head.next) return this.head;

		let current = this.head;
		this.tail = this.head;
		let nextNode = current.next;
		while (nextNode) {
			let temp = nextNode.next;
			nextNode.next = current;
			current = nextNode;
			nextNode = temp;
		}
		this.head.next = null;
		this.head = current;

		return this;
	}
}

let list = new LinkedList(100);
list.append(200);
list.append(300);
list.prepend(50);
list.insert(3, 800);
console.log(list.printList());
console.log(list);
console.log(list.reverse());
console.log(list.printList());

