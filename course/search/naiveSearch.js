const naiveSearch = (string1, string2) => {
	let substring = '';
	let current = 0;
	for (let item of string2) {
		if (string1[current] === item) {
			substring += item;
			current++;
		}
	}
	if (substring === string1) {
		return true;
	} else {
		return false;
	}
};

console.log(naiveSearch('cat', 'abcdefcatghijk'));
