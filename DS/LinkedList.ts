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
			currentNode = currentNode.next;

			count++;
		}

      
	}

	insert(index: number, value: T) {
		if (index >= this.length) return this.append(value);
		if (index === 0) return this.prepend(value);
		const newNode = new ListNode(value);

		const leader = this.traverseToIndex(index - 1);
		newNode.next = leader.next;
		leader.next = newNode;

		return newNode;
	}
}

let list = new LinkedList(100);
list.append(200);
list.append(300);
list.prepend(50);
console.log(list.insert(22, 800));
console.log(list.printList());