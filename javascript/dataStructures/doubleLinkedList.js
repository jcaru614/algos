class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // the current tail should point forward (= next) to the new node
            this.tail.next = newNode;
            // the new node should point back (= prev) to the current tail
            newNode.prev = this.tail;
            // the new node should become the new tail
            this.tail = newNode;
        }
        this.length++
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let nodeToRemove = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            // set the node before the current tail as the new tail
            this.tail = this.tail.prev;
            // remove the connection from the new tail to the old tail
            this.tail.next = null;
            // remove the connection from the old tail to the new tail
            nodeToRemove.prev = null;
        }
        this.length--;
        return nodeToRemove;
    }
    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length = 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--
        return oldHead;
    }
    unshift() {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this;

    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let runner = this.head;
        let counter = 0;
        while (counter !== index) {
            runner = runner.next
            counter++;
        }
        return runner;
    }
    set(index, val) {
        const gotIndex = get(index)
        if (gotIndex) {
            gotIndex.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(val)
        if (index === 0) return this.unshift(val);

        const newNode = new Node(val);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++
        return true;
    }
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift();

        const removedNode = this.getNodeAtIndex(index);
        const after = removedNode.next;
        const before = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        before.next = after;
        after.prev = before;
        this.length--;

    }
}

