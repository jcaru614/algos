// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

const areThereDuplicatesFC = (...items) => {
	let possibleDuplicates = {};
	for (const item of items) {
		if (possibleDuplicates[item]) return true;
		else possibleDuplicates[item] = 1;
	}
	return false;
};

const areThereDuplicatesMP = (...items) => {
	let sortedItems = items.sort();
	console.log(sortedItems);
	let left = 0;
	let right = sortedItems.length - 1;
	while (left <= right) {
		if (sortedItems[left] !== sortedItems[left + 1]) {
			left += 1;
		} else if (sortedItems[right] !== sortedItems[right - 1]) {
			right -= 1;
		} else {
			return true;
		}
	}
	return false;
};

// Examples:

console.log(areThereDuplicatesFC(1, 2, 3)); // false
console.log(areThereDuplicatesFC(1, 2, 2)); // true
console.log(areThereDuplicatesFC('a', 'b', 'c', 'a')); // true

console.log(areThereDuplicatesMP(3, 1, 2, 5, 7)); // false
console.log(areThereDuplicatesMP(2, 1, 2, 2, 5, 5, 22, 9)); // true
console.log(areThereDuplicatesMP('a', 'b', 'c', 'a', 'd', 't', 'y', 'f')); // true
