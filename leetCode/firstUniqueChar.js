/**
 * @param {string} s
 * @return {number}
 */

// create a hash that will store the letter and its index
// iterate through and store each letter with index
// if letter appears more than once (it exists in hash already) then remove it from hash or set to -1
// iterate over hash and compare for smallest index
// return index of the first unique character

var firstUniqChar = function (s) {
	let hash = {};

	// First pass: Store indices or mark duplicates
	for (let i = 0; i < s.length; i++) {
		const letter = s[i];
		if (hash[letter] === undefined) {
			hash[letter] = i;
		} else {
			hash[letter] = -1;
		}
	}

	let smallestIndex = Infinity;

	for (const key in hash) {
		if (hash[key] !== -1 && hash[key] < smallestIndex) {
			smallestIndex = hash[key];
		}
	}

	return smallestIndex === Infinity ? -1 : smallestIndex;
};

console.log(firstUniqChar('leetcode')); 

