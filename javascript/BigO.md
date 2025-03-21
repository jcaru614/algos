# Time Complexity Examples in JavaScript

```js
// O(1): Constant time, independent of input size.
arr.pop();

// O(log n): Logarithmic time. When the input size decreases on each iteration,
// like in binary search.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log(mid);
    // Missing: compare target with arr[mid] and update pointers
  }
  return -1;
}

// O(n): Linear time, grows directly proportional to input size.
for (let i = 0; i < arr.length; i++) {
  console.log('i', i);
}

// O(n^2): Quadratic time, typical of nested iteration or brute-force comparisons.
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    console.log('j', j);
  }
}

// O(2^n): Exponential time, grows extremely fast with input size.
// Example: recursive Fibonacci.
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
