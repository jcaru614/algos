class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqeue(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let runner = this.first;
            while (runner.next) {
                runner = runner.next
            }
            runner.next = newNode
        }
        return this.size++;
    }
    deqeue() {
        if(!this.first) return null;
        if(this.first === this.last) {
            this.first = null;
            this.last = null;
        }
        temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp;
    }

}

let queue = new Queue();

console.log(queue);
