// Binary Search Tree is a node-based (non linear) binary tree data structure which has the following properties:
// Root - The top node in a tree.
// Child -A node directly connected to another node when moving away from the Root.
// Parent - The converse notion of a child.
// Siblings -A group of nodes with the same parent.
// Leaf - A node with no children.
// Edge - The connection between one node and another.
// The left subtree of a node contains only nodes with keys lesser than the node’s key.
// The right subtree of a node contains only nodes with keys greater than the node’s key.

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			let current = this.root;
			while (true) {
				if (value === current.value) return undefined;
				if (value < current.value) {
					if (current.left === null) {
						current.left = newNode;
						return this;
					} else {
						current = current.left;
					}
				} else {
					if (current.right === null) {
						current.right = newNode;
						return this;
					} else {
						current = current.right;
					}
				}
			}
		}
	}
	find(value) {
		if (this.root === null) {
			return false;
		}
		if (this.root.value === value) {
			return this.root;
		}
		let current = this.root;
		let found = false;
		while (current && !found) {
			if (value < current.value) {
				if (current.left === null) {
					return false;
				} else {
					current = current.left;
				}
			} else if (value > current.value) {
				if (current.right === null) {
					return false;
				} else {
					current = current.right;
				}
			} else {
				found = true;
			}
		}
		return current;
	}
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(8);
tree.insert(2);
tree.insert(2);
console.log(tree.find(5));
console.log(tree);
