function firstDuplicateValue(array) {
	let dups = new Map();
	for (let i = 0; i < array.length; i++) {
		const num = array[i];
		if (!dups.has(num)) {
			dups.set(num, 1);
		} else {
			const currentCount = dups.get(num);
			dups.set(num, currentCount + 1);
			return num;
		}
	}

	return -1;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]));
