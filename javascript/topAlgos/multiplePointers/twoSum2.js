// Given a 1-indexed array of integers sorted in non-decreasing order,
// find two numbers that add up to the target.
// Return their indices as a 1-based array [index1, index2], where index1 < index2.
// Use only constant extra space.
const sum = (num1, num2) => num1 + num2;

function twoSum(numbers, target) {
  // - `left` starts at the beginning
  // - `right` starts at the end
  // Move pointers inward based on how their sum compares to the target
  // if its too small move left up and if its too big move right down

  let left = 0;
  let right = numbers.length - 1;
  while (left !== right) {
    if (sum(numbers[left], numbers[right]) < target) {
      left++;
    } else if (sum(numbers[left], numbers[right]) > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
}

console.log(twoSum([1, 2, 5, 7, 11, 15], 9)); // [2, 4]
