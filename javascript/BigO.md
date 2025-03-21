# Time Complexity Examples in JavaScript

```js
// O(1): Constant time – doesn't depend on input size
arr.pop();

// O(log n): Logarithmic time – input size is cut in half each step (e.g. binary search)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log(mid);
    // Normally you'd compare and move pointers here
    break; // this prevents an infinite loop in this example
  }
  return -1;
}

// O(n): Linear time – loop runs once per input element
for (let i = 0; i < arr.length; i++) {
  console.log('i', i);
}

// O(n log n): Typical of efficient sorting algorithms like quicksort, mergesort, or JS's .sort()
const sorted = arr.slice().sort((a, b) => a - b);

// O(n^2): Quadratic time – double nested loop over input
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    console.log('j', j);
  }
}

// O(2^n): Exponential time – grows very fast (e.g. recursive Fibonacci)
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

