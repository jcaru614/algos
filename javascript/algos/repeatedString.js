// There is a string, s , of lowercase English letters that is repeated infinitely many times.
// Given an integer, n , find and print the number of letter a's in the first n letters of the infinite string.

function repeatedString(s, n) {
	let letter = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === 'a') {
			letter += 1;
		}
	}
	return letter * n;
}

console.log(repeatedString('abcac', 100));
