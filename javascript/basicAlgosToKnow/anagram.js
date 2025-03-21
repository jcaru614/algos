// You're given two strings.
// Determine if they are anagrams — meaning they use the same characters
// in the same quantities, just possibly in a different order.

const isAnagram = (str1, str2) => {
  let map = {};
  for (let i = 0; i < str1.length; i++) {
    const item = str1[i];
    map[item] ? (map[item] += 1) : (map[item] = 1);
  }
  for (const item of str2) {
    if (!map[item]) {
      return false;
    }
    map[item] -= 1;
  }
  return true;
};

console.log(isAnagram('listen', 'silent')); // should return true
