// A binary tree is a tree data structure where each node has at most two child nodes,
// which are referred to as the left child and the right child. A binary search tree (BST)
// is a specific type of binary tree where the left child of a node contains a value less than
// the node's value, and the right child contains a value greater than the node's value.
// Root - The top node in a tree.
// Child -A node directly connected to another node when moving away from the Root.
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
			while (current) {
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
	BFS() {
		let data = [];
		let queue = [];
		if (!this.root) return data;
		queue.push(this.root);
		while (queue.length) {
			let node = queue.shift();
			data.push(node.value);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}
	preorderDFS(root) {
		if (!root) return;
		console.log(root.value); // Visit root first
		preorderDFS(root.left); // Traverse left subtree
		preorderDFS(root.right); // Traverse right subtree
	}
	inorderDFS(root) {
		if (!root) return;
		inorderDFS(root.left); // Traverse left subtree
		console.log(root.value); // Visit root
		inorderDFS(root.right); // Traverse right subtree
	}
	postorderDFS(root) {
		if (!root) return;
		postorderDFS(root.left); // Traverse left subtree
		postorderDFS(root.right); // Traverse right subtree
		console.log(root.value); // Visit root last
	}
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.find(5));
console.log(tree);
console.log('BFS Output:', tree.BFS());
// BFS Output: [ 10, 6, 15, 3, 8, 20 ]

// BFS looks at all levels on the same level before looking at child so looking horizontally first before moving on
// create a queue and add to queue
// then place root node in queue
// dequeue a node from the queue and push the value of the node into the variable that stores th enodes
// if there is a left child on the node dequeued add to queue
//  if there is a right child on the node dequeued add to queue
// once the queue is empty you are done
// return the variable that stores the values

//      10
//    /    \
//   6      15
//  / \       \
//  3   8      20


// Preorder:
// 10
// 6
// 3
// 8
// 15
// 20

// Inorder:
// 3
// 6
// 8
// 10
// 15
// 20

// Postorder:
// 3
// 8
// 6
// 20
// 15
// 10
