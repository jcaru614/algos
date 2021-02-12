// factorial is n * n -1 until it reaches 0

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));  