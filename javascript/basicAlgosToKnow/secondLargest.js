// Find the second largest unique number in a given array.
const secondLargest = (arr) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num < largest && num > secondLargest) {
      secondLargest = num;
    }
  }

  return secondLargest;
};

console.log(secondLargest([10, 5, 8, 12, 7])); // should return 10
