// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

const avgHelper = (num1, num2) => {
	const sum = num1 + num2;
	return sum / 2;
};
const averagePair = (array, targetAvg) => {
	if (array.length === 0) return false;
	let start = 0;
	let end = array.length - 1;
	while (start <= end) {
		let targetAvgHelper = avgHelper(array[start], array[end]);
		if (targetAvgHelper < targetAvg) {
			start++;
		} else if (targetAvgHelper > targetAvg) {
			end--;
		} else {
			return true;
		}
	}
	return false;
};

// Sample Input:

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
