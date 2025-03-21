// 💡 Multiple Pointers Pattern
// Given a sorted array, count the number of unique values using two pointers (i, j).
// Pointer `i` tracks the position of the last unique value found.
// Pointer `j` scans ahead to find the next unique value.
// When a new unique value is found, move `i` forward and overwrite the value at `i`.

function countUniqueValuesMultiPointer(sortedArray) {
  if (sortedArray.length === 0) return 0;

  let i = 0; // Tracks last unique value

  for (let j = 1; j < sortedArray.length; j++) {
    if (sortedArray[i] !== sortedArray[j]) {
      // not equal means unique
      i++;
      sortedArray[i] = sortedArray[j]; // Store new unique value at position i (optional)
      console.log(
        `Unique value found. Moved i to ${i} and set sortedArray[${i}] = ${sortedArray[j]}`
      );
    }
    // If arr[i] === arr[j], it's a duplicate
    // just move j to the next index
    // i stays where it is, ready to store the next unique value
  }
  console.log('Unique values stored in-place:', sortedArray.slice(0, i + 1));
  return i + 1; // Total count of unique values
}

console.log(countUniqueValuesMultiPointer([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValuesMultiPointer([])); // 0
console.log(countUniqueValuesMultiPointer([1, 1, 1, 1])); // 1

// 💡 Sliding Window Pattern
const countUniqueValuesSlidingWindowPattern = (sortedArray) => {
  if (sortedArray.length === 0) return 0;
  let uniqueValues = 0;
  for (let i = 0; i < sortedArray.length; i++) {
    const current = sortedArray[i];
    const next = sortedArray[i + 1];
    if (current !== next) {
      uniqueValues += 1;
    }
  }
  return uniqueValues;
};

console.log(countUniqueValuesSlidingWindowPattern([-2, -1, 1, 1, 1, 2, 3, 3, 4]));
// Unique values are: -2, -1, 1, 2, 3, 4 → return value should be 6
