// 💡 Problem:
// Write a function that returns the first `n` numbers in the Fibonacci sequence.
// The Fibonacci sequence starts with 0 and 1, and every number after that is the sum of the previous two.
// Example: fibonacciGenerator(8) ➝ [0, 1, 1, 2, 3, 5, 8, 13]
function fibonacciGenerator(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      result.push(i);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }

  return result;
}

console.log(fibonacciGenerator(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
