// This pattern divides a data set into smaller chunks and then repeats the process with a subset of data.

// write a function that takes a sorted array and a value, and returns the index of the array with the value
//  if no value found then return -1

const divideAndConquerSearchDivideAndConquer = (array, val) => {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (val > array[middle]) {
      start = middle + 1;
    } else if (val < array[middle]) {
      end = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};

console.log(
  divideAndConquerSearchDivideAndConquer(
    [1, 3, 5, 7, 8, 9, 11, 12, 13, 15, 20, 22, 23, 30, 45],
    7
  )
);

