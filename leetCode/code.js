/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
	let newArr = [];

	let chunks = [];
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		chunks.push(item);

		if (chunks.length === size) {
			newArr.push(chunks);

			chunks = [];
		}
	}
	if (chunks.length > 0) {
		newArr.push(chunks);
	}
	return newArr;
};

console.log(chunk([1, 9, 6, 3, 2], 3));
