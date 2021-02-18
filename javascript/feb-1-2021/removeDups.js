// write a function that will return an array without duplicate values in the array.

const removeDups = (array) => {
	let uniqueArr = array.filter((item, index) => {
		return array.indexOf(item) == index;
	});
	return uniqueArr;
};
console.log(removeDups([1, 9, 3, 3, 4, 5, 5, 6, 5, 8, 9, 9]));
