// Given a string of characters as input, write a function that returns it with the characters reversed.
const stringReversal = (string) => {
	let newString = '';
	for (let i = string.length - 1; i >= 0; i--) {
		newString += string[i];
	}
	return newString;
};

console.log(stringReversal('hello world'));
