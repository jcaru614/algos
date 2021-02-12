// Given a string of characters as input, write a function that returns it with the characters reversed.
const stringReversal = (string) => {
	let newString = "";
	for (let i = string.length - 1; i >= 0; i--) {
		if (string[i] === string[0]) {
			newString += string[i];
			return newString;
		} else {
			newString += string[i];
		}
	}
};

console.log(stringReversal('hello world'));
