const reverseHelper = (string) => {
	let reversedStr = '';
	for (let i = string.length - 1; i >= 0; i--) {
		reversedStr += string[i];
	}
	return reversedStr;
};

function reverseWordsInString(string) {
	let reversedString = reverseHelper(string);
	let finalString = '';
	let tempString = '';

	for (let i = 0; i < reversedString.length; i++) {
		if (reversedString[i] !== ' ') {
			tempString += reversedString[i];
		} else {
			finalString += reverseHelper(tempString) + ' ' ;
			tempString = '';
		}
	}

	finalString += reverseHelper(tempString);
	return finalString;
}

console.log(reverseWordsInString('AlgoExpert is the best!'));
