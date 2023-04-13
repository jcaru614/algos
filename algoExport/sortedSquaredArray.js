// Multiple Pointer Solution
function sortedSquaredArray(array) {
  let squaredArray = [];
  let left = 0;
  let right = array.length - 1;
  //  less or equal for the last value so that the pointers are both on same index it still unshifts
  while (left <= right) {
    if (Math.pow(array[left], 2) < Math.pow(array[right], 2)) {
      squaredArray.unshift(Math.pow(array[right], 2));
      right--;
    } else {
      squaredArray.unshift(Math.pow(array[left], 2));
      left++;
    }
  }
  return squaredArray;
}

console.log(sortedSquaredArray([-5, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 4, 8, 12]));
//     L1 R1
// 25, 1, 4, 16, 64, 144 => [4, 16, 25, 64, 144]
//1, 4, 16, 25, 64, 144
