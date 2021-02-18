function fibonacci(num) {
	let fibArr = [0, 1];
	for (let i = 2; i <= num; i++) {
		console.log("i", i)
		let prevNum1 = fibArr[i - 1];
		let prevNum2 = fibArr[i - 2];
		fibArr.push(prevNum1 + prevNum2);
	}
	return fibArr;
}

console.log(fibonacci(8));
