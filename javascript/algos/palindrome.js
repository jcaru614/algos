// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.
const palindromeBool = (string) => {
	string = string.toLowerCase();
	let j = string.length - 1; //  starts at lowercase r
	for (let i = 0; i < string.length; i++) {
		if (string[i] === string[j]) {
			j--;
		} else {
			return false;
		}
	}
    return true
};

console.log(palindromeBool('Rotator'));
