// You're given a list of numbers in a sequence with one number missing. Find the missing number.

const findMissingNumbers = (arr) => {
  const missing = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];

    const gap = next - current;

    if (gap > 1) {
      for (let j = current + 1; j < next; j++) {
        missing.push(j);
      }
    }
  }

  return missing;
};

console.log(findMissingNumbers([1, 2, 5, 6])); // → [3, 4]
console.log(findMissingNumbers([10, 11, 14])); // → [12, 13]
console.log(findMissingNumbers([3, 4, 5, 9])); // → [6, 7, 8]
