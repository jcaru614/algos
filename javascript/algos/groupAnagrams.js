// Given an array of strings, group the anagrams together.
// Return a 2D array where each group contains words that are anagrams of each other.
//
// Anagrams are words made of the same letters in different order.
// Example: "eat", "tea", and "ate" are all anagrams of each other.
//
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
//
// You may return the result in any order.
// You should use a hash map to group words by a common key.

function groupAnagrams(strs) {
  let map = {};
  // map will consist of a key in alphabetical order and value is array of those anagrams in non alphabetical
  // we use the sorting to see if anagram or not but leave value in tact for return
  // we can then push all those values to grouped and return
  for (let i = 0; i < strs.length; i++) {
    const item = strs[i];
    let key = item.split('').sort().join('');
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(item);
  }
  return Object.values(map);
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
