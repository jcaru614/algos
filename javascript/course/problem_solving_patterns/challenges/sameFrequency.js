// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

const sameFrequency = (num1, num2) => {
	let num1String = num1.toString();
	let num2String = num2.toString();
	if (num1String.length !== num2String.length) return false;

	let numFrequencyCounter1 = {};
	let numFrequencyCounter2 = {};

	for (let i = 0; i < num1String.length; i++) {
		const element = num1String[i];
		numFrequencyCounter1[element] = numFrequencyCounter1[element]
			? (numFrequencyCounter1[element] += 1)
			: 1;
	}

	for (let i = 0; i < num2String.length; i++) {
		const element = num2String[i];
		numFrequencyCounter2[element] = numFrequencyCounter2[element]
			? (numFrequencyCounter2[element] += 1)
			: 1;
	}

	for (const key in numFrequencyCounter1) {
		if (!(key in numFrequencyCounter2)) return false;
		if (numFrequencyCounter1[key] !== numFrequencyCounter2[key]) return false;
	}
	return true;
};

// Examples:

console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(34, 14)); // false
// sameFrequency(22, 222); // false
// sameFrequency(182, 281); // true
