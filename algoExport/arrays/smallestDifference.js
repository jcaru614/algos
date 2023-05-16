function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  console.log(arrayOne, arrayTwo);
  let i = 0,
    j = 0,
    minDiff = [arrayOne[i], arrayTwo[j]];
  while (i < arrayOne.length && j < arrayTwo.length) {
    if (Math.abs(arrayOne[i] - arrayTwo[j]) === 0) {
      return [arrayOne[i], arrayTwo[j]];
    } else if (Math.min(arrayOne[i], arrayTwo[j]) === arrayOne[i]) {
      minDiff =
        Math.abs(minDiff[0] - minDiff[1]) > Math.abs(arrayOne[i] - arrayTwo[j])
          ? [arrayOne[i], arrayTwo[j]]
          : minDiff;

      i++;
    } else {
      minDiff =
        Math.abs(minDiff[0] - minDiff[1]) > Math.abs(arrayOne[i] - arrayTwo[j])
          ? [arrayOne[i], arrayTwo[j]]
          : minDiff;

      j++;
    }
  }
  return minDiff;
}
console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
// [ -1, 3, 5, 10, 20, 28 ] [ 15, 17, 26, 134, 135 ]
