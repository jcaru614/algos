// 💡 Multiple Pointers Pattern
// 🔍 Multiple Pointers = pointers move independently, often from opposite ends or at different intervals.
// This pattern creates two pointers that move toward each other
// based on a condition. It's efficient for problems involving
// sorted arrays or sequences.

// 🧠 Problem: Given a sorted array of integers,
// return the first pair of numbers whose sum is zero.
// If no such pair exists, return undefined.

const findZeroSumPair_MultiplePointers = (sortedArray) => {
  let left = 0; // Start pointer at the beginning
  let right = sortedArray.length - 1; // End pointer at the end

  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];

    if (sum === 0) {
      return [sortedArray[left], sortedArray[right]]; // Found a pair
    } else if (sum > 0) {
      right--; // Sum too high → move right pointer left
    } else {
      left++; // Sum too low → move left pointer right
    }
  }

  return undefined; // No pair found
};

// 🧪 Example usage
console.log(findZeroSumPair_MultiplePointers([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]
console.log(findZeroSumPair_MultiplePointers([-4, -3, -2, -1, 0, 3, 4])); // [-4, 4]
console.log(findZeroSumPair_MultiplePointers([1, 2, 3])); // undefined
