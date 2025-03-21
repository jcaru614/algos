// Anagrams are words or phrases that contain the same number of characters.
// Create a function that checks for this.

const anagram = (str1, str2) => {
	if (str1.length !== str2.length) return false;

	let strObj = {};

	for (let i = 0; i < str1.length; i++) {
		strObj[str1[i]] ? (strObj[str1[i]] += 1) : (strObj[str1[i]] = 1);
	}
	console.log('strObj ', strObj);
	for (let j = 0; j < str2.length; j++) {
		if (!strObj[str2[j]]) return false;
		else strObj[str2[j]]--;
	}
	console.log('strObj true', strObj);
	return true;
};

console.log(anagram('anagram', 'nagaram'));
