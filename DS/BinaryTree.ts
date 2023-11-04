class BSTNode<T> {
	left: BSTNode<T> | null;
	right: BSTNode<T> | null;
	value: T;

	constructor(value: T) {
		this.left = null;
		this.right = null;
		this.value = value;
	}
}

class BinarySearchTree<T> {
	private root: BSTNode<T> | null;

	constructor() {
		this.root = null;
	}

	insert(value: T) {
		const newNode = new BSTNode(value);
		if (!this.root) return (this.root = newNode);

		let currentNode = this.root;
		while (currentNode) {
			if (value > currentNode.value) {
				if (!currentNode.right) {
					currentNode.right = newNode;
					return;
				}
				currentNode = currentNode.right;
			} else {
				if (!currentNode.left) {
					currentNode.left = newNode;
					return;
				}
				currentNode = currentNode.left;
			}
		}
	}

	find(value: T): BSTNode<T> | null {
		let currentNode = this.root;

		while (currentNode) {
			if (value === currentNode?.value) {
				return currentNode;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else {
				currentNode = currentNode.left;
			}
		}

		return null;
	}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);

console.log(tree);

// result

//      9
//    /   \
//   4    20
//  / \   / \
// 1   6 15  170
