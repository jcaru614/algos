function mergeOverlappingIntervals(array) {
  const mergedIntervals = [];
  array.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < array.length; i++) {
    if (!mergedIntervals.length) {
      mergedIntervals.push(array[i]);
    }
    const currentInterval = array[i];
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      mergedIntervals.push(currentInterval);
    }
  }
  return mergedIntervals;
}
console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ])
);
