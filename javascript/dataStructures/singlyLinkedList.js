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
        // add to back
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
        // remove from back
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
    shift() {
        // remove from front
        if (!this.head) return undefined;
        let removedNode = this.head;
        // moving tether to the next to loose the head
        this.head = removedNode.next;
        this.length--;
        return removedNode;
    }
    unshift(val) {
        // add to front
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        // set the new node's next to the head
        newNode.next = this.head;
        // set the new node as the head
        this.head = newNode;

        this.length++;
        return this;
    }
    get(index) {
        // get node at the index that was passed in
        if (this.length <= index) return null;
        let runner = this.head;
        let counter = 0;
        while (counter < index) {
            runner = runner.next;
            counter++;
        }
        return runner;
    }
    set(index, val) {
        // set a new value on a node at that index
        const gotIndex = this.get(index);
        if (gotIndex) {
            gotIndex.val = val;
            return true;
        } else {
            return false;
        }
    }
    insert(index, val) {
        // inserts a node at a given index
        if (index < 0 || index > this.length) {
            // if index is less than zero or greater than the length return false
            return false;
        } else if (index === this.length) {
            // index is equal to length then push a node
            return this.push(val)
        } else if (index === 0) {
            // if index is first place than just call unshift
            return this.unshift(val);
        } else {
            const newNode = new Node(val);
           let prev = this.get(index - 1);
           let temp = prev.next
           let counter = 0;
           while (counter !== index) {
               counter++
               prev.next = newNode;
               newNode.next = temp;
           }
           this.length++
           return true;
        }

    }

}


let list = new SinglyLinkedList;

list.push(2)
list.push(5)
list.push(':)')
list.push(7)
list.unshift(22)
// console.log(list.get(3))
// list.set(1, "setTheList")
// list.insert(5, "insertInList")
console.log(list)