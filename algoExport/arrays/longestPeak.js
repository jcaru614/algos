function longestPeak(array) {
  let peakCount = 0;

  for (let center = 1; center < array.length - 1; center++) {
    let left = center - 1;
    let right = center + 1;

    if (array[left] < array[center] && array[right] < array[center]) {
      let tempPeakCount = 3;

      while (left > 0 && array[left - 1] < array[left]) {
        tempPeakCount++;
        left--;
      }

      while (right < array.length - 1 && array[right] > array[right + 1]) {
        tempPeakCount++;
        right++;
      }

      peakCount = Math.max(peakCount, tempPeakCount);
    }
  }

  return peakCount;
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
