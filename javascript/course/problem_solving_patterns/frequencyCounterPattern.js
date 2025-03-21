// 💡 Frequency Counter Pattern
// This pattern uses an object to count how often values (like characters or numbers) occur.
// It's ideal for comparing two pieces of data like strings, arrays, or numbers.

// 🧠 Problem: Given two strings, determine if the second string is an anagram of the first.
// An anagram contains the same characters with the same frequency, in any order.

const is_FrequencyCounter = (string1, string2) => {
  // If lengths differ, they can't be anagrams
  if (string1.length !== string2.length) return false;

  const freqMap = {}; // Stores the count of each character in string1

  // Count characters in string1
  for (const letter of string1) {
    freqMap[letter] ? (freqMap[letter] += 1) : (freqMap[letter] = 1);
  }

  // Subtract characters using string2
  for (const letter of string2) {
    if (!freqMap[letter]) return false; // Letter missing or overused
    freqMap[letter] -= 1;
  }

  return true; // All letters matched perfectly
};

const anagram = (string1, string2) => {
  if (string1.length !== string2.length) return false;

  for (let i = 0; i < string1.length; i++) {
    const letter = string1[i];
    // index of checks throuh string2 for an index matching the value of the provided index in string1
    // returns -1 if none exists
    let letterMatchIndex = string2.indexOf(letter);
    if (letterMatchIndex === -1) return false;
    // remove that value at the index to shorten array
    string2.slice(letterMatchIndex, letterMatchIndex + 1);
  }
  return true;
};

console.log(anagram('cat', 'act'));
console.log(anagramFrequencyCounterVersion('knee', 'keen'));
// {c:1, a:1, t:1}, {a:1, c:1,t:1}
console.log(isAnagram_FrequencyCounter('listen', 'silent')); // true
console.log(isAnagram_FrequencyCounter('hello', 'bello')); // false
console.log(isAnagram_FrequencyCounter('aabbcc', 'abcabc')); // true
console.log(isAnagram_FrequencyCounter('rat', 'car')); // false
