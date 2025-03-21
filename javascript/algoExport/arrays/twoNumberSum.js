// solved with multiple pointer patter
function twoNumberSum(array, targetSum) {
  let orderedArr = array.sort((a, b) => a - b);
  console.log(orderedArr);
  let left = 0;
  let right = orderedArr.length - 1;
  while (left < right) {
    if (orderedArr[left] + orderedArr[right] === targetSum) {
      return [orderedArr[left], orderedArr[right]];
    } else if (orderedArr[left] + orderedArr[right] > targetSum) {
      right--;
    } else if (orderedArr[left] + orderedArr[right] < targetSum) {
      left++;
    }
  }
  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
