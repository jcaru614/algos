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
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let runner = this.head
            while (runner.next !== null) {
                runner = runner.next
            }
            runner.next = newNode
            this.tail = runner.next
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;

        let runner = this.head;
        let newTail = runner;
        while (runner.next !== null) {
            // setting new tail before runner traversal so that it is always one before last
            newTail = runner;
            runner = runner.next
        }
        // setting the actual tail to new tail which is one before last
        this.tail = newTail;
        // setting the last to null and removing it
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return this;
    }

}


let list = new SinglyLinkedList;

list.push(2)
list.push(5)
list.push(7)
list.pop()
list.pop()


console.log(list)