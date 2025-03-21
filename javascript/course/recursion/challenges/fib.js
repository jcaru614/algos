// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
// and where every number thereafter is equal to the sum of the previous two numbers.

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  // 🔁 Recursive case:
  // The nth Fibonacci number is the sum of the two previous numbers:
  // - fib(n - 1): the (n-1)th number
  // - fib(n - 2): the (n-2)th number
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
