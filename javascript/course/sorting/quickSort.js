// Like Merge Sort, QuickSort is a Divide and Conquer algorithm.
// It picks an element as a pivot and partitions the given array around the picked pivot.
// There are many different versions of quickSort that pick pivot in different ways.
// Iterations always start on the cemented/swapped index and go from there

const pivotHelper = (arr, start, end) => {
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	let pivot = arr[start];
	let swapIdx = start;

	for (let i = start + 1; i <= end; i++) {
		if (pivot > arr[i]) {
			swapIdx++;
			swap(arr, swapIdx, i);
		}
	}
	swap(arr, start, swapIdx);
	return swapIdx;
};

let quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		let pivotIndex = pivotHelper(arr, left, right); //3
		//left
		quickSort(arr, left, pivotIndex - 1);
		//right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
};

let array = [5, 2, 1, 10, 3, 8, 12, 15];
// console.log(PivotHelper(array, 0, array.length - 1));
console.log(quickSort(array));
