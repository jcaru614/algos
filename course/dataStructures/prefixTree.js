// each letter is a node. If you insert app after apple it will mark the second p and e as isEndOfWord = true
// if you add pan as a third word then it will check if there is an a under p and create a new a node under
// p and since n does not exist we will add n under a

// if letters already exist then it will be marked with endOfWord true
// if it doesnt exist then it will add the letters and then mark the end of word for that word

// (root)
//    |
//    a (node for 'a')
//    |
//    p (node for 'p')
//    |
//    p (node for 'p', isEndOfWord = true)  <-- end of "app"
//    |
//    l (node for 'l')
//    |
//    e (node for 'e', isEndOfWord = true)  <-- end of "apple"
//    |
//    n (node for 'n', isEndOfWord = true)  <-- new node for "pan"

class TrieNode {
	constructor() {
		this.children = {};
		this.isEndofWord = false;
	}
}
class Trie {
	constructor() {
		this.root = new TrieNode();
	}
	insert(word) {
		let node = this.root;
		for (let char of word) {
			if (!node.children[char]) {
				node.children[char] = new TrieNode();
			}
			node = node.children[char];
		}
		node.isEndofWord = true;
	}
	search(word) {
		let node = this.root;

		for (let char of word) {
			if (!node.children[char]) {
				return false;
			}
			node = node.children[char];
		}

		return node.isEndofWord;
	}
	startsWith(prefix) {
		let node = this.root;
		for (let char of prefix) {
			if (!node.children[char]) {
				return false;
			}
			node = node.children[char];
		}
		return true;
	}
}

// Example usage:
const trie = new Trie();

console.log("Inserting 'apple':");
trie.insert('apple');
console.log("Inserting 'app':");
trie.insert('app');
console.log("Inserting 'pan':");
trie.insert('pan');

console.log("Searching for 'apple':");
console.log('Result:', trie.search('apple'));
console.log("Searching for 'app':");
console.log('Result:', trie.search('app'));
console.log("Searching for 'bat':");
console.log('Result:', trie.search('bat'));
console.log("Searching for 'appl':");
console.log('Result:', trie.search('appl'));

console.log("Starts with 'app':");
console.log('Result:', trie.startsWith('app'));
console.log("Starts with 'ban':");
console.log('Result:', trie.startsWith('ban'));
