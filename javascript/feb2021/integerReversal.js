// Given an integer, reverse the order of the digits.
const intReversal = (int) => {
	int = int.toString();
	let newIntStr = '';
	for (let i = int.length - 1; i >= 0; i--) {
		if (int[i] !== int[0]) {
			newIntStr += int[i];
		} else {
			newIntStr += int[i];
			newIntStr = parseInt(newIntStr);
			return newIntStr;
		}
	}
};

console.log(intReversal(12345));
