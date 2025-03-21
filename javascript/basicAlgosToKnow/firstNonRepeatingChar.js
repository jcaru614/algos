// I want to find the first character in a string that doesn’t repeat later
// Input: a string like "leetcode"

function firstNonRepeatingChar(str) {
  const freq = {};

  // First pass: build the frequency map
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Second pass: find the first char that appears only once
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  // If we got here, there’s no non-repeating character
  return null;
}
