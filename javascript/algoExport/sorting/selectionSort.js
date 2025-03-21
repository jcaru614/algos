function selectionSort(array) {
	for (var i = 0; i < array.length - 1; i++) {
		let minIndex = i;
		for (var j = i + 1; j < array.length; j++) {
			if (array[minIndex] > array[j]) {
				minIndex = j;
			}
		}
		[array[i], array[minIndex]] = [array[minIndex], array[i]];
	}
	return array;
}
console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]));
