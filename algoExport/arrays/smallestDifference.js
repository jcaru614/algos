function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    currentDiff = [arrayOne[i], arrayTwo[j]];

  while (i < arrayOne.length && j < arrayTwo.length) {
    if (Math.abs(arrayOne[i] - arrayTwo[j]) === 0) {
      return [arrayOne[i], arrayTwo[j]];
    }

    if (Math.min(arrayOne[i], arrayTwo[j]) === arrayOne[i]) {
      currentDiff =
        Math.abs(arrayOne[i] - arrayTwo[j]) <
        Math.abs(currentDiff[0] - currentDiff[1])
          ? [arrayOne[i], arrayTwo[j]]
          : currentDiff;

      i++;
    } else {
      currentDiff =
        Math.abs(arrayOne[i] - arrayTwo[j]) <
        Math.abs(currentDiff[0] - currentDiff[1])
          ? [arrayOne[i], arrayTwo[j]]
          : currentDiff;

      j++;
    }
  }
  return currentDiff;
}
// console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));

console.log(
  smallestDifference(
    [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123],
    [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530]
  )
);
