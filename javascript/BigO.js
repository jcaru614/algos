// O(1): Constant time, independent of input size.
arr.pop();

// O(log n): Log-linear time, dependent on half the input size. When the input size decreases on each iteration
// or step, an algorithm is said to have logarithmic time complexity.
function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		console.log(mid);
	}
	return -1;
}

// O(n): Linear time, grows directly proportional to input size.
for (let i = 0; i < arr.length; i++) {
	console.log('i', i);
}

// O(n^2): Quadratic time, typical of less efficient sorting algorithms like bubble sort, or having nested iteration.
for (let i = 0; i < array.length; i++) {
	for (let j = 0; j < array.length; j++) {
		console.log('j', j);
	}
}

// O(2^n): Exponential time, grows very quickly, often impractical for large inputs.
// Each call to the function results in two additional calls, leading to an exponential growth in the number of calls.
function fibonacci(n) {
	if (n <= 1) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
