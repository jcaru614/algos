function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  let threeDarray = [];

  for (let current = 0; current < array.length ; current++) {
    let left = current + 1;
    let right = array.length - 1;

    while (left < right) {
      if (array[current] + array[left] + array[right] > targetSum) {
        right--;
      } else if (array[current] + array[left] + array[right] < targetSum) {
        left++;
      } else {
        threeDarray.push([array[current], array[left], array[right]]);
        right--;
        left++;
      }
    }
  }

  return threeDarray;
}
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
// [-8, -6, 1,  2, 3,  5, 6, 12 ]
