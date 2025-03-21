// Count how many times each value appears in an array using map.
const countOccurrences = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    map[item] ? (map[item] += 1) : (map[item] = 1);
  }
  return map;
};

console.log(countOccurrences(['a', 'b', 'a', 'c', 'b', 'a'])); // should return { a: 3, b: 2, c: 1 }
