// Similar to the Multiple pointers pattern, this pattern creates a “window” which can be either a number
// or an array from one position or index to another. This “window” increase or decreases in size/values depending
// on given conditions and a new “window” is created.

// Slidin window pattern moves in the same direction at same time vs multiple pointer pattern moves at different extremes
// and in diffferent intervals each iteration step

// write a function which accepts an array of ints and a number. Should calculate the max sum of n consecutive elements in the array
const slidingWindowPatternMaxSubArray = (array, num) => {
	let maxSum = 0;
	let tempSum = 0;
	if (array.length < num) return null;

	for (let i = 0; i < num; i++) {
		// this creates the window
		maxSum += array[i];
	}
	tempSum = maxSum;
	for (let i = num; i < array.length; i++) {
		tempSum = tempSum - array[i - num] + array[i];
		if (tempSum > maxSum) maxSum = tempSum;
	}
	return maxSum;
};

console.log(slidingWindowPatternMaxSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 2));

// implement a function that accepts a sorted array from smallest to biggest and counts the unique values in the array.
const countUniqueValuesSlidingWindowPattern = (array) => {
	if (array.length === 0) return 0;
	let uniqueValues = 0;
	for (let i = 0; i < array.length; i++) {
		const current = array[i];
		const next = array[i + 1];
		if (current !== next) {
			uniqueValues += 1;
		}
	}
	return uniqueValues;
};

console.log(countUniqueValuesSlidingWindowPattern([-2, -1, 1, 1, 1, 2, 3, 3, 4]));
// unique numbers are -2, -1, 1, 1, 1, 2, 3 so return value is 6
