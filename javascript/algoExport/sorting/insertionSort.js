function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let j = i + 1;
    while (j > 0) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
      j--;
    }
  }
  return array;
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]));
