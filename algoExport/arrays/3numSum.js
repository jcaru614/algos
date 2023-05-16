function threeNumberSum(array, targetSum) {
	// Write your code here.
	array.sort((a, b) => a - b);
	let threeDarray = [];
	let right = array.length - 1;
	let left = array[1];
	for (let i = 0; i < array.length; i++) {
		const current = array[i];
		if (current + array[left] + array[right] === targetSum) {
			threeDarray.push([current, array[left], array[right]]);
		} else if (current + array[left] + array[right] < targetSum) {
		} else {
		}
	}
	return threeDarray;
}
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
