function bestSeat(array) {
	let temp = { emptySeatCount: 0, start: 0, end: 0 };
	let final = { emptySeatCount: 0, start: 0, end: 0 };
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 0 && temp.emptySeatCount === 0) {
			temp.emptySeatCount++;
			temp.start = i;
		} else if (array[i] === 0 && temp.emptySeatCount !== 0) {
			temp.emptySeatCount++;
		} else if (array[i] === 1 && temp.emptySeatCount > 0) {
			temp.end = i - 1;
			if (temp.emptySeatCount > final.emptySeatCount) {
				final = Object.assign(temp);
			}
			temp = Object.assign({ emptySeatCount: 0, start: 0, end: 0 });
		}
	}
	if (final.emptySeatCount === 0) return -1;

	return Math.floor((final.start + final.end) / 2);
}
console.log(bestSeat([1, 0, 1, 0, 0, 0, 1]));
