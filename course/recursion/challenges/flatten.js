// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(array) {
	var newArr = [];
	for (var i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			newArr = newArr.concat(flatten(array[i]));
		} else {
			newArr.push(array[i]);
		}
	}
	return newArr;
}
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
