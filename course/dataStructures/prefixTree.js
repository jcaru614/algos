class TrieNode {
  constructor() {
    this.children = {}; // Object to store the children nodes for each character
    this.isEndOfWord = false; // Boolean to mark if the node represents the end of a word
    console.log("TrieNode created:", this);
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(); // The root of the Trie is initialized with an empty node
    console.log("Trie initialized with root node:", this.root);
  }

  // Method to insert a word into the Trie
  insert(word) {
    let node = this.root; // Start from the root node
    console.log(`Inserting the word: '${word}'`);

    // Iterate over each character in the word
    for (let char of word) {
      console.log(`Processing character: '${char}'`);

      // Check if the current node has a child node corresponding to the character
      if (!node.children[char]) {
        // If the character is not found, create a new TrieNode for this character
        console.log(`Character '${char}' not found. Creating a new node.`);
        node.children[char] = new TrieNode(); // Create a new node for the character
      } else {
        // If the character exists, move to the next level (child node)
        console.log(`Character '${char}' found. Moving to the next node.`);
      }
      
      node = node.children[char]; // Move to the next node (either newly created or found)
      console.log("Current node after moving:", node);
    }

    // After processing all characters, mark the last node as the end of the word
    node.isEndOfWord = true; 
    console.log(`Word '${word}' inserted successfully. Marking the end of word.`);
  }

  // Method to search for a word in the Trie
  search(word) {
    let node = this.root; // Start from the root node
    console.log(`Searching for the word: '${word}'`);

    // Iterate over each character in the word
    for (let char of word) {
      console.log(`Checking for character: '${char}'`);

      // Check if the current node has a child corresponding to the character
      if (!node.children[char]) {
        // If the character is not found, return false because the word is not in the Trie
        console.log(`Character '${char}' not found. Word does not exist.`);
        return false;
      }

      node = node.children[char]; // Move to the next node (child node corresponding to the character)
      console.log("Current node after moving:", node);
    }

    // After processing all characters, check if the current node marks the end of the word
    if (node.isEndOfWord) {
      console.log(`Word '${word}' found in the Trie.`);
      return true; // Return true if it's a valid word in the Trie
    } else {
      // If the word is a prefix but not a complete word, return false
      console.log(`Reached the end of the word but it's not a complete word in the Trie.`);
      return false;
    }
  }
}

// Example usage:
const trie = new Trie();

// Inserting words into the Trie
console.log("Inserting 'apple':");
trie.insert('apple');
console.log("\nInserting 'app':");
trie.insert('app');
// Searching for words in the Trie
console.log("\nSearching for 'apple':");
console.log('Result:', trie.search('apple')); // true

console.log("\nSearching for 'app':");
console.log('Result:', trie.search('app')); // true

console.log("\nSearching for 'bat':");
console.log('Result:', trie.search('bat')); // false

console.log("\nSearching for 'appl':");
console.log('Result:', trie.search('appl')); // false
