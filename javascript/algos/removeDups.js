// Given a sorted array of integers (nums),
// remove the duplicates in-place such that each unique element appears only once.
// You must do this using constant extra memory (no new array).
//
// After removing duplicates, the first part of the array should contain the unique values.
// You don't need to care about what comes after the unique part.
//
// Return the number of unique elements (the length of the deduplicated part).
//
// Example:
// Input: [0, 0, 1, 1, 2]
// Output: // [0, 1, 2]
// The array becomes: [0, 1, 2, _, _] ← the rest doesn't matter

function removeDuplicates(nums) {
  // - i scans through every number
  // - j marks where the next unique number should be written
  // Since the array is sorted, duplicates will be next to each other
  // check the previous index with to see if its a dup
  let j = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[j] = nums[i];
      j++;
    }
  }
  return nums.slice(0, j);
}

console.log(removeDuplicatesClean([0, 0, 1, 1, 2])); // [0, 1, 2]
