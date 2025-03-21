// Reverse the elements of an array directly without creating a new one.
const reverseArrayInPlace = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
};

console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); //[5,4,3,2,1]
