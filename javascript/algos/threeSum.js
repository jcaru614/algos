// Given an array of integers, find all unique triplets [a, b, c] such that:
// a + b + c equals 0.
// Each triplet must use three different indices.
// You may include the same number more than once if it's at a different index.
// Do not return duplicate triplets — triplets with the same numbers in a different order count as duplicates.
// The input array is not sorted.
const sum = (num1, num2, num3) => num1 + num2 + num3;

function threeSum(nums) {
  // Sort the array so we can use two pointers efficiently
  // For each number, fix it as the first value of the triplet
  // Then use two pointers (`left` and `right`) to find pairs that sum to 0
  // Skip duplicates to avoid repeating the same triplets
  // move left and right accordingly if greater or less than 0
  nums.sort((a, b) => a - b);
  let tripletsArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (sum(nums[left], nums[i], nums[right]) < 0) {
        left++;
      } else if (sum(nums[left], nums[i], nums[right]) > 0) {
        right--;
      } else {
        tripletsArr.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }
  }
  return tripletsArr;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Expected output: [[-1, -1, 2], [-1, 0, 1]]
