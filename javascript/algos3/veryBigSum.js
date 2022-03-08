// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
	let total = 0;
	for (let i = 0; i < ar.length; i++) {
		total += ar[i];
	}
	return total;
}

console.log(aVeryBigSum([1001010110, 120001010, 100003, 1001002]));
