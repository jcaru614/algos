// Insertion sort -  The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are
// picked and placed at the correct position in the sorted part.

const insertionSort = (arr) => {
  let currentTempVal;
  for (let i = 1; i < arr.length; i++) {
    currentTempVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentTempVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentTempVal;
  }
  return arr;
};
console.log(insertionSort([3, 44, 38, 5, 47, 15]));
