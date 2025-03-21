function bubbleSort(array) {
  var swap = false;
  for (let i = 0; i < array.length - 1; i++) {
    swap = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        swap = true;
      }
    }
    if (swap === false) return array;
  }
  return array;
}

console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]));
