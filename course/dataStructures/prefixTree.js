// Each letter in a word is represented as a node in the Trie.
// When inserting "app" after "apple," the second 'p' (already existing) is marked as isEndOfWord = true.
// The 'e' remains isEndOfWord = true for "apple."

// When adding "pan," the Trie checks if 'a' exists under 'p':
// - If 'a' is missing, a new node is created.
// - Since 'n' does not exist under 'a,' a new 'n' node is added and marked as isEndOfWord = true.

// If a letter sequence already exists, the last node of the word is marked as isEndOfWord = true.
// If a sequence does not exist, new nodes are created, and the last letter is marked as isEndOfWord = true.

// (root)
//   └── 'a' → 'p' → 'p' → 'l' → 'e' (isEndOfWord = true)
//                │
//                └── (isEndOfWord = true)  <-- for "app"
//   └── 'p' → 'a' → 'n' (isEndOfWord = true)

// "this" inside the Trie class always refers to the instance of the Trie.
// "this.root" gives access to the root node of that instance.

// https://www.fullstack.cafe/interview-questions/trie
class TrieNode {
	constructor() {
		this.children = {};
		this.isEndOfWord = false;
	}
}

class Trie {
	constructor() {
		this.root = new TrieNode();
	}
	insert(word) {
		let node = this.root;
		for (const char of word) {
			if (!node.children[char]) {
				node.children[char] = new TrieNode();
			}
			node = node.children[char];
		}
		node.isEndOfWord = true;
	}
	search(word) {
		let node = this.root;
		for (const char of word) {
			if (!node.children[char]) {
				return false;
			}
			node = node.children[char];
		}
		return node.isEndOfWord;
	}
	startsWith(prefix) {
		let node = this.root;
		for (const char of prefix) {
			if (!node.children[char]) {
				return false;
			}
			node = node.children[char];
		}
		return true;
	}
	delete(word) {
		let node = this.root; // Start from the root node
		let stack = []; // This stack will track nodes and characters while traversing the Trie

		// Step 1: Traverse the Trie to reach the node corresponding to the end of the word
		for (let i = 0; i < word.length; i++) {
			const char = word[i];

			// If the current character doesn't exist, the word is not in the Trie, so stop
			if (!node.children[char]) {
				return; // Word doesn't exist in the Trie, so we can't delete it
			}

			// Store the current node and character in the stack as we traverse
			stack.push({ node, char });

			// Move to the next node based on the current character
			node = node.children[char];
		}

		// Step 2: Unmark the end of word flag for the last character node
		node.isEndOfWord = false;

		// Step 3: Backtrack through the stack and delete unnecessary nodes
		// We go backwards from the last character in the word to potentially remove unused nodes
		for (let i = stack.length - 1; i >= 0; i--) {
			const { node, char } = stack[i];

			// Check if the current child node has no children and is not the end of any other word
			// This means the node is no longer needed and can be safely deleted
			if (Object.keys(node.children[char].children).length === 0 && !node.children[char].isEndOfWord) {
				delete node.children[char]; // Remove the child node since it's not required anymore
			} else {
				break; // If we find a node that is required for another word, stop the deletion process
			}
		}
	}

	autoComplete(prefix) {
		let node = this.root; // Start from the root of the Trie
		let result = []; // This will hold the words that start with the prefix

		// Step 1: Traverse to the node that corresponds to the last character of the prefix
		for (const char of prefix) {
			if (!node.children[char]) {
				return result; // If a character doesn't exist, return an empty list of words
			}
			node = node.children[char]; // Move to the next node based on the current character
		}

		// Step 2: After traversing the prefix, use DFS to find all words that start with the given prefix
		// We pass the current node (where the prefix ends) to the _dfs method along with the prefix itself
		this._dfs(node, prefix, result); // Call the DFS helper method to explore further down the Trie

		return result; // Return the list of words that start with the given prefix
	}

	// Helper DFS function to find all words starting from a given node
	_dfs(node, prefix, result) {
		// Step 3: If the current node is the end of a word, add the word to the result list
		if (node.isEndOfWord) {
			result.push(prefix); // Add the current prefix as a word in the result
		}

		// Step 4: Explore all children nodes recursively to find all possible words that start with the prefix
		for (const char in node.children) {
			// Call DFS recursively on each child node, appending the current character to the prefix
			this._dfs(node.children[char], prefix + char, result); // Keep searching and appending characters
		}
	}

	// listWords()
	// countWords()
	// LongestCommonPrefix()
}

const trie = new Trie();

trie.insert('apple');
trie.insert('app');
trie.insert('pan');
trie.insert('bat');
trie.insert('ball');
trie.insert('band');

console.log('Result:', trie.search('apple'));

console.log('Result:', trie.search('app'));

console.log('Result:', trie.search('bat'));

console.log('Result:', trie.search('appl'));

console.log("Starts with 'app':");
console.log('Result:', trie.startsWith('app'));
console.log("Starts with 'ban':");
console.log('Result:', trie.startsWith('ban'));

// delete
console.log('Delete:');
trie.delete('app');
// Search for words after deletion
console.log('Result search for "app" after delete:', trie.search('app')); // false
console.log('Result search for "apple" after delete:', trie.search('apple')); // true
