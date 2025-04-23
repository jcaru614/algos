# Time Complexity Examples in JavaScript

```js
<<<<<<< HEAD
// O(1): Constant time – doesn't depend on input size
arr.pop();

// O(log n): Logarithmic time – input size is cut in half each step (e.g. binary search)
=======
// O(1): Constant time, independent of input size.
arr.pop();

// O(log n): Logarithmic time. When the input size decreases on each iteration,
// like in binary search.
>>>>>>> 5f7f4fdf81dc898b72dbade9d38885ab3742e275
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log(mid);
<<<<<<< HEAD
    // Normally you'd compare and move pointers here
    break; // this prevents an infinite loop in this example
=======
    // Missing: compare target with arr[mid] and update pointers
>>>>>>> 5f7f4fdf81dc898b72dbade9d38885ab3742e275
  }
  return -1;
}

<<<<<<< HEAD
// O(n): Linear time – loop runs once per input element
=======
// O(n): Linear time, grows directly proportional to input size.
>>>>>>> 5f7f4fdf81dc898b72dbade9d38885ab3742e275
for (let i = 0; i < arr.length; i++) {
  console.log('i', i);
}

<<<<<<< HEAD
// O(n log n): Typical of efficient sorting algorithms like quicksort, mergesort, or JS's .sort()
const sorted = arr.slice().sort((a, b) => a - b);

// O(n^2): Quadratic time – double nested loop over input
=======
// O(n^2): Quadratic time, typical of nested iteration or brute-force comparisons.
>>>>>>> 5f7f4fdf81dc898b72dbade9d38885ab3742e275
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    console.log('j', j);
  }
}

<<<<<<< HEAD
// O(2^n): Exponential time – grows very fast (e.g. recursive Fibonacci)
=======
// O(2^n): Exponential time, grows extremely fast with input size.
// Example: recursive Fibonacci.
>>>>>>> 5f7f4fdf81dc898b72dbade9d38885ab3742e275
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
<<<<<<< HEAD

=======
>>>>>>> 5f7f4fdf81dc898b72dbade9d38885ab3742e275
