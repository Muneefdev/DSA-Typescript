class DoublyListNode<T> {
	value: T;
	next?: DoublyListNode<T> | null;
	prev?: DoublyListNode<T> | null;

	constructor(value: T) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList<T> {
	head: DoublyListNode<T>;
	tail: DoublyListNode<T>;
	length = 0;

	constructor(value: T) {
		this.head = new DoublyListNode(value);
		this.head.next = null;
		this.head.prev = null;
		this.tail = this.head;
		this.length++;
	}

	push(value: T) {
		let newNode = new DoublyListNode(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
	}

	unshift(value: T) {
		let newNode = new DoublyListNode(value);
		newNode.next = this.head;
		this.head.prev = newNode;
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

	traverseToIndex(index: number): DoublyListNode<T> {
		let count = 0;
		let currentNode = this.head;

		while (count !== index) {
			currentNode = currentNode.next as DoublyListNode<T>;
			count++;
		}

		return currentNode;
	}

	insert(index: number, value: T) {
		if (index >= this.length) return this.push(value);
		if (index === 0) return this.unshift(value);
		const newNode = new DoublyListNode(value);

		const leader = this.traverseToIndex(index - 1);
		const follower = leader.next;

		newNode.next = follower;
		newNode.prev = leader;
		leader.next = newNode;
		follower!.prev = newNode;
		this.length++;

		return this.printList();
	}

	pop() {
		const target = this.traverseToIndex(this.length - 2);
		target.next = null;
		this.tail = target;
		this.length--;

		return this.printList();
	}

	shift() {
		this.head.next!.prev = null;
		this.head = this.head.next as DoublyListNode<T>;
		this.length--;

		return this.printList();
	}

	remove(index: number) {
		if (index < this.length) return this.shift();
		if (index >= this.length) return this.pop();

		const leader = this.traverseToIndex(index - 1);
		const target = leader.next;
		const follower = target?.next;
		leader.next = follower;
		follower!.prev = leader;

		this.length--;

		return this.printList();
	}
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.push(5);
myDoublyLinkedList.push(16);
myDoublyLinkedList.unshift(1);
myDoublyLinkedList.insert(2, 99);
myDoublyLinkedList.insert(20, 88);
myDoublyLinkedList.remove(2);
myDoublyLinkedList.remove(20);
console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList);
