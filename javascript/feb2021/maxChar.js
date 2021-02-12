// Given a string of characters, return the character at the key that appears the most often.
const maxChar = (string) => {
	let charObj = {};
	for (let i = 0; i < string.length; i++) {
		if (string[i] !== ' ' && charObj[string[i]]) {
			console.log('charObj[string[i] += 1', charObj[string[i]]);
			charObj[string[i]] += 1;
		} else if (string[i] !== ' ' && !charObj[string[i]]) {
			console.log('charObj[string[i] = 1', charObj[string[i]]);
			charObj[string[i]] = 1;
		}
	}
	console.log('charObj Complete ', charObj);
	let counter = 0;
	let returnKey = '';
	for (const key in charObj) {
		console.log('charObj[key]', charObj[key]);
		if (charObj[key] > counter) {
			counter = charObj[key];
			returnKey = key;
		}
	}
	return returnKey;
};

console.log(maxChar('hello world htgg gugbu ggu'));
