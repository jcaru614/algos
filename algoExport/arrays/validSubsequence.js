function isValidSubsequence(array, sequence) {
  // Write your code here.
  let sequenceIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (sequenceIndex === sequence.length) {
      break;
    }
    if (array[i] === sequence[sequenceIndex]) {
      sequenceIndex++;
    }
  }
  if (sequenceIndex === sequence.length) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
