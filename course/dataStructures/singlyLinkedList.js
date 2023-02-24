// singly linked list is a linear data structure that consists of nodes as items. These nodes include two things:
// value and pointer properties, and every pointer refers to another node.

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(val) {
		var newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		var current = this.head;
		var prev = current;
		if (!this.head) return undefined;
		while (current.next) {
			prev = current;
			current = current.next;
		}
		this.tail = prev;
		this.tail.next = null;
		this.length--;
		console.log(current);
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift() {
		let currentHead = this.head;
		if (!this.head) return undefined;
		this.head = this.head.next;
		this.length--;
		return currentHead;
	}
	unshift(val) {
		var newNode = new Node(val);
		let currentHead = this.head;
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			newNode.next = currentHead;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		var current = this.head;
		let count = 0;
		if (index >= this.length || index < 0) return undefined;
		while (current) {
			if (count === index) {
				return current;
			} else {
				current = current.next;
				count++;
			}
		}
	}
	set(index, val) {
		let currentNode = this.get(index);
		if (!currentNode) {
			return false;
		} else {
			currentNode.val = val;
			return true;
		}
	}
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) return this.push(val);
		if (index === 0) return !!this.unshift(val);

		var newNode = new Node(val);
		var prev = this.get(index - 1);
		var temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;
		this.length++;
		return true;
	}
	remove(index) {
		if (index < 0 || index > this.length) return undefined;
		if (index === this.length - 1) return this.pop(val);
		if (index === 0) return this.shift();
		var prev = this.get(index - 1);
		var removed = prev.next;
		prev.next = removed.next;
		this.length--;
		return removed;
	}
	reverse() {
		if (!this.head) return undefined;

		let currentNode = this.head;
		this.head = this.tail;
		this.tail = currentNode;
		let prev = null;
		let next;
		while (currentNode) {
			next = currentNode.next;
			currentNode.next = prev;
			prev = currentNode;
			currentNode = next;
		}
		return this;
	}
}

var list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// list.pop();
// list.shift();
// list.unshift(0);
// console.log(list.get(3));
// console.log(list.set(0, "newVal"));
// list.insert(2, "insert");
console.log(list.remove(2));
console.log(list);
