// Multiple Pointers Pattern creates pointers or values that correspond to an index or position and move based on a specific condition. Used for linear structures like arrays, strings, linked lists, etc.

// implement a function which takes an array of sorted numbers and returns an array of the two values which equal zero
const sumZeroMultiplePointersPattern = (array) => {
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		if (array[left] + array[right] === 0) {
			return [array[left], array[right]];
		} else if (array[left] + array[right] > 0) {
			right--;
		} else {
			left++;
		}
	}
};

console.log(sumZeroMultiplePointersPattern([-4, -3, -2, -1, 0, 1, 2, 5]));

// implement a function that accepts a sorted array from smallest to biggest and counts the unique values in the array.
const countUniqueValuesMultiplePointersPattern = (array) => {
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

console.log(countUniqueValuesMultiplePointersPattern([-2, -1, 1, 1, 1, 2, 3, 3, 4]));
// unique numbers are -2, -1, 1, 1, 1, 2, 3 so return value is 6
