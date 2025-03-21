// You're given a number n. Multiply all numbers from 1 to n together.

const factorial = (num) => {
  let result = 1;
  for (let n = 1; n <= num; n++) {
    result = result * n;
  }
  return result;
};

console.log(factorial(5)); // should return 120
