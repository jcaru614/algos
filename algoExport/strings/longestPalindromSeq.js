// at every iteration create two iterations, one back and one fwd.
// first check if the left and right of center are equal, if so continue and keep count
// if not, check if the previous index is equal to center, if so, continue with iteration
// but move left iterator down by one
// compare current longest palindrome to newest palindrome and replace variable if needed
function longestPalindromicSubstring(string) {
	let palindrome = '';
	for (let i = 0; i < string.length; i++) {
		let tempPalindrome = '';
		let left = i - 1;
		let right = i + 1;
		const odd = string[i - 1] === string[i];
		const even = string[i - 1] === string[i + 1];
		if (even) {
			tempPalindrome += string[i];
			while (left >= 0 && right < string.length && string[left] === string[right]) {
				tempPalindrome = string[left] + tempPalindrome;
				tempPalindrome += string[right];
				left--;
				right++;
			}
			palindrome = tempPalindrome.length > palindrome.length ? tempPalindrome : palindrome;
		}
		if (odd) {
			tempPalindrome = string[i - 1] + string[i]; 
			left--;
			while (left >= 0 && right < string.length && string[left] === string[right]) {
				tempPalindrome = string[left] + tempPalindrome;
				tempPalindrome += string[right];
				left--;
				right++;
			}
			palindrome = tempPalindrome.length > palindrome.length ? tempPalindrome : palindrome;
		}
	}
	return palindrome;
}

console.log(longestPalindromicSubstring('abaxyzzyxf'));
