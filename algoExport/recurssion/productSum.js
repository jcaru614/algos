function productSum(array, multiplier = 1) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (Array.isArray(element)) {
      sum += productSum(element, multiplier + 1);
    } else {
      sum += element;
    }
  }
  return sum * multiplier;
}
console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
