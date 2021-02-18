// Given an integer, reverse the order of the digits.
const intReversal = (int) => {
	int = int.toString();
	let newIntStr = '';
	for (let i = int.length - 1; i >= 0; i--) {
		newIntStr += int[i];
	}
	newIntStr = parseInt(newIntStr);
	return newIntStr;
};

console.log(intReversal(12345));
