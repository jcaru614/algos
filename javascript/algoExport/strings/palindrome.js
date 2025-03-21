// multiple pointer pattern
function isPalindrome(string) {
	let left = 0;
	let right = string.length - 1;
	while (left < right) {
		if (string[left] !== string[right]) {
			return false;
		} else {
			left++;
			right--;
		}
	}
	return true;
}

console.log(isPalindrome('abcurba'));
