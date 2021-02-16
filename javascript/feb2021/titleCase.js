// Write a function which takes a string of two or more word and capitalize the first letter of each word.

const titleCase = (string) => {
	let newStr = '';

	newStr += string[0].toUpperCase();
	for (let i = 1; i < string.length; i++) {
		if (string[i - 1] === ' ') {
			newStr += string[i].toUpperCase();
		} else {
			newStr += string[i];
		}
	}
	return newStr;
};

console.log(titleCase('this is a bunch of words to title case'));
