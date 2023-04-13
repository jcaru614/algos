// The Frequency Counter pattern uses an object or set to collect values and the frequency of those values.
// The Frequency Counter pattern is most helpful when you have multiple pieces of data that you want to compare with one another.

// given two strings, write a function that returns a boolen to determine if the second string is an anagram of the first string

const anagramFrequencyCounterVersion = (string1, string2) => {
	if (string1.length !== string2.length) return false;

	let anagramDict1 = {};
	let anagramDict2 = {};

	for (const letter of string1) {
		// initialize anagramDict1[letter], check if its undefined, if so = 1 otherwise itself plus 1
		anagramDict1[letter] ? (anagramDict1[letter] += 1) : (anagramDict1[letter] = 1);
	}
	for (const letter of string2) {
		anagramDict2[letter] ? (anagramDict2[letter] += 1) : (anagramDict2[letter] = 1);
	}
	console.log(anagramDict1, anagramDict2);
	for (const key in anagramDict1) {
		if (!(key in anagramDict2)) return false;
		if (anagramDict1[key] !== anagramDict2[key]) return false;
	}
	return true;
};


const anagram = (string1, string2) => {
	if (string1.length !== string2.length) return false;

	for (let i = 0; i < string1.length; i++) {
		const letter = string1[i];
		// index of checks throuh string2 for an index matching the value of the provided index in string1
		// returns -1 if none exists
		let letterMatchIndex = string2.indexOf(letter);
		if (letterMatchIndex === -1) return false;
		// remove that value at the index to shorten array
		string2.slice(letterMatchIndex, letterMatchIndex + 1);
	}
	return true;
};

console.log(anagram('cat', 'act'));
console.log(anagramFrequencyCounterVersion('knee', 'keen'));
// {c:1, a:1, t:1}, {a:1, c:1,t:1}
