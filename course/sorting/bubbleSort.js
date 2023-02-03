// Bubble sort algorithm is an algorithm that sorts the array by comparing two adjacent elements and swaps them if they are not in the intended order. 
// larger values bubble up to the top or end of the array

const bubbleSort = (arr) => {
	let isSwapped;
	for (var i = 0; i < arr.length; i++) {
		isSwapped = true;
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// let temp = arr[j];
				// arr[j] = arr[j + 1];
				// arr[j + 1] = temp;
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                // optimization - if no values were swapped while on j loop then break out
				isSwapped = true;
			}
		}
		if (!isSwapped) {
			break;
		}
	}
	return arr;
};

console.log(bubbleSort([2, 6, 8, 10, 1, 9, 4, 3, 5, 7]));
