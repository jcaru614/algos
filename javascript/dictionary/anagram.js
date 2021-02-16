function anagram(str1, str2) {
	// check lengtht if uneven then false
	if (str1.length !== str2.length) {
		return false;
	}
	// create dictionary
	const dict = {};
	// loop str1
	for (let i = 0; i < str1.length; i++) {
		dict[str1[i]] ? (dict[str1[i]] += 1) : (dict[str1[i]] = 1);
	}
	console.log(dict);
	// loop str2 independently
	for (let i = 0; i < str2.length; i++) {
		// index not in dict return false
		if (!dict[str2[i]]) {
			console.log('not there', dict[str2[i]], 'index ', str2[i]);
			return false;
		} else {
			// index is there so substract one to make sure it doesnt keep counting it
			dict[str2[i]] -= 1;
			console.log('its there!', dict[str2[i]], 'index ', str2[i]);
			console.log('the dict ', dict);
		}
	}
	return true;
}

console.log(anagram('anagram', 'mangraa'));
