// used for sorted arrays, checking from the center and seein if > or < and then moving to middle of new array again
const binarySearch = (arr, value) => {
	let beginning = 0,
		end = arr.length - 1,
		middle = Math.floor(end / 2);

	while (beginning !== middle) {
		if (value < middle) {
			end = middle - 1;
		} else {
			beginning = middle + 1;
		}
		middle = Math.floor((beginning + end) / 2);
	}
	return arr[middle] === value ? middle : -1;
};

console.log(
	binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 4)
);
