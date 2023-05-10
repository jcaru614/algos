function minimumWaitingTime(queries) {
	queries.sort((a, b) => a - b);
	console.log(queries);
	let waitingTime = 0;
	let prevTime = 0;
	for (let i = 0; i < queries.length; i++) {
		waitingTime += prevTime;
		prevTime += queries[i];
	}
	return waitingTime;
}
console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
// 1, 2, 2, 3, 6
