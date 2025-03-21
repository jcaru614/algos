// Stacks are linear data structures that allow operations only on one end,
// meaning that all basic operations like insertion can only be done at the ends of the structure. (LIFO)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
      this.length++;
    }
    return this;
  }
  pop() {
    if (!this.first) return null;
    if (!this.first.next) {
      this.first = null;
      this.last = null;
    } else {
      let temp = this.first;
      this.first = this.first.next;
      this.length--;
      return temp.val;
    }
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
console.log(stack);
