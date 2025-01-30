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
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(6);
tree.root.right = new Node(15);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(20);

console.log('BFS Output:', tree.BFS());
// BFS Output: [ 10, 6, 15, 3, 8, 20 ]