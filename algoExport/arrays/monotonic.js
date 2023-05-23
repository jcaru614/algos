function isMonotonic(array) {
  let isIncreasing = false;
  if (array[0] < array[array.length - 1]) {
    isIncreasing = true;
  }
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const nextElement = array[i + 1];
    if (isIncreasing) {
      if (nextElement < element) return false;
    } else {
      if (nextElement > element) return false;
    }
  }
  return true;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]));
