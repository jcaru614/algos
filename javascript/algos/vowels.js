// write a function that takes a string as an argument and returns the number of vowels contained in that string.

const vowels = (string) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	let numOfVals = 0;

	for (let i = 0; i < string.length; i++) {
		if (
			string[i] === vowels[0] ||
			string[i] === vowels[1] ||
			string[i] === vowels[2] ||
			string[i] === vowels[3] ||
			string[i] === vowels[4]
		) {
			numOfVals += 1;
		}
	}
	return numOfVals;
};

console.log(vowels('thisisarandomword'));
