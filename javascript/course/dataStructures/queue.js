// Javascript Queue is one of the linear data structures used to store data in the memory.
// The queue is a linear data structure that stores data sequentially based on the First In First Out (FIFO)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enque(val) {
    let newNode = new Node(val);
    if (!this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      return this.length++;
    }
  }
  deqeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (!this.first.next) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      this.length--;
      return temp.val;
    }
  }
}

var queue = new Queue();
queue.enque(1);
queue.enque(2);
queue.enque(3);
queue.enque(4);
queue.deqeue();
console.log(queue);
