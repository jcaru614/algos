function moveElementToEnd(array, toMove) {
  let i = 0,
    j = array.length - 1;
  while (i < j) {
    if (array[i] !== toMove) {
      i++;
    } else if (array[j] === toMove) {
      j--;
    } else {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return array;
}
console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2));
