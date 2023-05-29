// create map with key: original string, value: alphabetical string
// find matchin alphabetical values in map
// push they keys of the matching values to a newArr
function groupAnagrams(words) {
	const anagramGroups = {};

	for (const word of words) {
		const sortedWord = word.split('').sort().join('');
		if (anagramGroups.hasOwnProperty(sortedWord)) {
			anagramGroups[sortedWord].push(word);
			console.log('if', anagramGroups);
		} else {
			anagramGroups[sortedWord] = [word];
			console.log('else', anagramGroups);
		}
	}

	return Object.values(anagramGroups);
}

console.log(groupAnagrams(['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp']));
