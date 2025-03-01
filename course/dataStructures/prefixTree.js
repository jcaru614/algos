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
    let node = this.root;
    let stack = []; // This stack will track nodes and characters while traversing the Trie
    // Step 1: Traverse the Trie to reach the node corresponding to the end of the word
    for (const char of word) {
      // If the current character doesn't exist, we can't delete it
      if (!node.children[char]) {
        return;
      }
      // Store the current node and character in the stack as we traverse
      stack.push({ node, char });
      node = node.children[char];
    }
    // Step 2: Unmark the end of word flag for the last character node
    node.isEndOfWord = false;
    // Step 3: Backtrack through the stack and delete nodes
    for (let i = stack.length - 1; i >= 0; i--) {
      const { node, char } = stack[i];
      // Check if the current child node has no children and not the end of any word (there for not used)
      if (!node.children[char].children && !node.children[char].isEndOfWord) {
        delete node.children[char]; // Remove the child node since it's not required by any other words
      } else {
        break; // If we find a node that is required for another word or end of word, stop deletion process
      }
    }
  }
  autoComplete(prefix) {
    let node = this.root;
    let result = []; // This will hold the words that start with the prefix
    for (const char of prefix) {
      if (!node.children[char]) {
        return result; // If a character doesn't exist, return an empty list of words
      }
      node = node.children[char]; // Move to the next node based on the current character
    }
    // Use DFS to find words that start with prefix. Pass the current node (where prefix ends)
    this._collectWords(node, prefix, result);

    return result; // Return the list of words that start with the given prefix
  }
  // Function to find words starting from a node (node - current node exploring, prefix - the word built so far)
  _collectWords(node, prefix, result) {
    if (node.isEndOfWord) result.push(prefix); // endOfword true means valid word, add it to the result
    // Step 3: Recursively explore all child nodes to find more words
    for (const char in node.children) { // append char to prefix until we get to a end of word
      this._collectWords(node.children[char], prefix + char, result); // pass result so we can keep adding to it
    }
  }
  // Function to find the longest common prefix in a list of words
  longestCommonPrefix(words) {
    if (words.length === 0) {
      return ''; // If there are no words, return an empty string
    }

    // Start by assuming the first word is the longest common prefix
    let prefix = words[0];

    // Iterate through the rest of the words
    for (let i = 1; i < words.length; i++) {
      // Compare the current prefix with the current word
      while (words[i].indexOf(prefix) !== 0) {
        // If the current word doesn't start with the prefix, shorten the prefix
        prefix = prefix.substring(0, prefix.length - 1);
        // If the prefix becomes empty, return an empty string (no common prefix)
        if (prefix === '') {
          return '';
        }
      }
    }
    // Return the longest common prefix
    return prefix;
  }
  // Least likely to be asked
  listWords() {
    let result = [];
    this._collectWords(this.root, '', result);
    return result;
  }
  _collectWords(node, prefix, result) {
    if (node.isEndOfWord) result.push(prefix); // If it's a valid word, add it to the result
    for (const char in node.children) {
      this._collectWords(node.children[char], prefix + char, result); // Append characters to form words
    }
  }
}

const trie = new Trie();

trie.insert('apple');
trie.insert('app');
trie.insert('pan');
trie.insert('bat');
trie.insert('ball');
trie.insert('band');

// Test methods
console.log('Result search for "apple":', trie.search('apple')); // true
console.log('Result search for "tap":', trie.search('tap')); // false

console.log("Starts with 'app':", trie.startsWith('app')); // true
console.log("Starts with 'ban':", trie.startsWith('ban')); // true

trie.delete('app');
console.log('Result search for "app" after delete:', trie.search('app')); // false

console.log('AutoComplete for "ba":', trie.autoComplete('ba')); // ["bat", "ball", "band"]

console.log(
  'Longest common prefix: ',
  trie.longestCommonPrefix(['apple', 'app', 'appl'])
); // "appl"

console.log('List all words in the Trie:', trie.listWords()); // ["apple", "app", "pan", "bat", "ball", "band"]
