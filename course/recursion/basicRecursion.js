// basic recursion problem

// sumRange of 5 is 5 + 4 + 3 + 2 + 1
const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

// factorial of 5 is 5 * 4 * 3 * 2 * 1
const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(5));
