// Replace every occurrence of a given character in a string with another. For Example-

const replace = (inputStr, replaceThis, withThis) => {
	let replacementVal = '';

	[...inputStr].forEach((element) => {
		if (element === replaceThis) {
			replacementVal += withThis;
		} else {
			replacementVal += element;
		}
	});
	return replacementVal;
};

console.log(
	replace('a sentence to have letters replaced with some other number', 'e', 0)
);
