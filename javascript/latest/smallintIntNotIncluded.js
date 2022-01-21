// Given an array of ints, return the smallest int that is not included in the array

function solution(A) {
	let missingInt;
	let sortedA = A.sort((a, b) => a - b);
	console.log('A sorted ', A);
	for (let i = 0; i < sortedA.length; i++) {
		let element = sortedA[i];
		let nextElement = sortedA[i + 1];
		console.log('element ', element);
		console.log('next element ', nextElement);
		if (nextElement > element + 1 && nextElement >= 0) {
			console.log('element + 1 ==>', element + 1);
			missingInt = element + 1;
			console.log('missing int if ', missingInt);
			return missingInt;
		} else if (!nextElement) {
			missingInt = element + 1;
			console.log('missing int else if', missingInt);
			return missingInt;
		} else if (nextElement <= 0) {
			missingInt = 1;
			console.log('missing int else', missingInt);
			return missingInt;
		}
	}
	return missingInt;
}

solution([6, 1, 8, 4, 2, 5, 7]);
