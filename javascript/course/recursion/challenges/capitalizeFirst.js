// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
	let capitalize = [];

	function helper(helperArray) {
		if (helperArray.length === 0) return capitalize;
		capitalize.push(helperArray[0].charAt(0).toUpperCase() + helperArray[0].slice(1));
		helperArray.shift();
		helper(helperArray);
	}
	helper(arr);
	return capitalize;
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
