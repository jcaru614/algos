// Multiple Pointers Pattern creates pointers or values that correspond to an index or position and move based on a specific condition. 
// Used for linear structures like arrays, strings, linked lists, etc.

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
