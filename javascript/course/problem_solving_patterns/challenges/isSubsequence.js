// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a
// subsequence of the characters in the second string. In other words, the function should check whether the characters in the first
// string appear somewhere in the second string, without their order changing.

function isSubsequence(string1, string2) {
	let substring = '';
	let current = 0;
	for (let i = 0; i < string2.length; i++) {
		if (string1[current] === string2[i]) {
			substring += string2[i];
			current++;
		}
	}
	if (substring === string1) {
		return true;
	} else {
		return false;
	}
}

// Examples:

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
