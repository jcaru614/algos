// linear search works on unsorted array, need to check every value since there is no order
const linearSearch = (arr, value) => {
	for (const i in arr) {
		console.log('element ', arr[i]);
		if (arr[i] === value) {
			return i;
		}
	}
	return -1;
};

console.log(linearSearch([10, 40, 'a', 20, 'b', 35, 'c', 30], 20));
