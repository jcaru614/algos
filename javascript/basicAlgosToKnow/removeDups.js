// Go through an array and eliminate any repeated values so that each element appears only once.
const removeDuplicates = (arr) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    // no conditional needed it overwrites if it exists with true again since its a key
    map[item] = true;
  }
  let dedupped = [];
  for (const key in map) {
    dedupped.push(parseInt(key));
  }
  return dedupped;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // should return [1, 2, 3, 4, 5]

// A Set is like a Map that only stores unique keys — no values, no duplicates.
const removeDuplicatesWithSet = (arr) => [...new Set(arr)];

console.log(removeDuplicatesWithSet([1, 2, 2, 3, 4, 4, 5])); // should return [1, 2, 3, 4, 5]
