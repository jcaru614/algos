const greatestDivisible = (num1, num2) => {
	let tempDivisor = 2;
	let biggestNum = num1 < num2 ? num2 : num1;
	let smallestNum = num1 < num2 ? num1 : num2;
	console.log("s",smallestNum)
	console.log("l",biggestNum)
	console.log(biggestNum);
	for (let i = 2; i < biggestNum; i++) {
		if (biggestNum % i == 0 && smallestNum % i == 0) {
			tempDivisor = i;
			console.log('tempdiv ', tempDivisor);
		} else {
			tempDivisor = tempDivisor;
			console.log('tempdiv ', tempDivisor);
		}
	}
	return tempDivisor;
};

console.log(greatestDivisible(15, 35));
