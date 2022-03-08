// How do get nth Fibonacci number?
const fib = (n) => {
	let fibResults = [0, 1];
    if (n <= 2) return 1;
	for (let i = 2; i <= n; i++) {
		let prevNum = fibResults[i - 1];
		let prevPrevNum = fibResults[i - 2];
		fibResults.push(prevNum + prevPrevNum);
	}
	return fibResults;
};

console.log(fib(12));
