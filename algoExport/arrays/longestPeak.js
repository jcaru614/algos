function longestPeak(array) {
	let peakCount = 0,
		tempPeakCount = 0,
		center = 1;

	while (center < array.length - 1) {
		let left = center - 1,
			right = center + 1;

		if (array[left] < array[center] && array[right] < array[center]) {
			tempPeakCount = 3;

			while (left > 0 && array[left] < array[left + 1]) {
				tempPeakCount++;
				left--;
			}

			while (right < array.length - 1 && array[right] > array[right + 1]) {
				tempPeakCount++;
				right++;
			}

			if (tempPeakCount > peakCount) peakCount = tempPeakCount;
		}

		center++;
	}

	return peakCount;
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]));
