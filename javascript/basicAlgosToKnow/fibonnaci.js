// Return the nth number in the Fibonacci sequence, which starts like this:
const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const fibonacciIterative = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
};

console.log(fibonacci(6)); // should return 8
console.log(fibonacciIterative(6)); // should return 8
