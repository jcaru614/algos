// Given an array and a size, split the array items into a list of arrays of the given size.
const arrayChunk = (array, size) => {
	let arrayChunk = [];

	for (let i = 0; i < array.length; i += size) {
		arrayChunk.push(array.slice(i, i + size));
	}
	return arrayChunk;
};

console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 4));
