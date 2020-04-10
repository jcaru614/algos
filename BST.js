class BinaryNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null
    }
}

function getSmallest(node) {
    if (node.left === null) {
        return node;
    } else {
        return this.getSmallest(node.left)
    }
}

function getLargest(node) {
    if (node.right === null) {
        return node;
    } else {
        return this.getLargest(node.right)
    }
}

function findValue(val, node) {
    if (node === null) {
        return false
    }
    if (node === val) {
        return true
    }
    else if (node.left < val) {
        return this.getSmallest(node.left)
    } else if (node.right > val) {
        return this.getLargest(node.right)
    }
}


let tree = new BST();
tree.root = new BinaryNode(70)
tree.root.left = new BinaryNode(50)
tree.root.right = new BinaryNode(75)
tree.root.left.right = new BinaryNode(66)
tree.root.left.left = new BinaryNode(15)
tree.root.right.left = new BinaryNode(99)
tree.root.right.right = new BinaryNode(100)

console.log(findValue(66, tree.root));
