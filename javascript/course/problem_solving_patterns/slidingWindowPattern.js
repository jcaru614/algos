// 💡 Sliding Window Pattern
// 🔍 Sliding Window = window moves in one direction at a fixed or adaptive size.
// This pattern creates a "window" of a fixed size over a portion of the array.
// The window moves forward (one element at a time) as you evaluate or update conditions.
// Ideal for problems involving sequences, ranges, or consecutive elements.

// 🧠 Problem:
// Write a function that accepts an array of integers and a number `n`.
// The function should return the maximum sum of `n` consecutive elements in the array.

const slidingWindowPatternMaxSubArray = (array, n) => {
  let maxSum = 0;
  let tempSum = 0;

  // Create the initial window of size `n`
  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  // Slide the window forward one element at a time
  for (let i = n; i < array.length; i++) {
    // Update the temp sum:
    // - Subtract the value that is no longer in the window (array[i - n])
    // - Add the new value that just entered the window (array[i])
    tempSum = tempSum - array[i - n] + array[i];

    // Update maxSum if the current window sum is higher
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(slidingWindowPatternMaxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
// Best window: [8, 5, 6] → sum = 19
