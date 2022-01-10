/*
 * Complete the 'longestConsecutive' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY nums as parameter.
 */

function longestConsecutive(nums) {
	const sorted = nums.sort((a, b) => a - b);
	console.log(sorted);
	const longestSequence = [];
	longestSequence.push(sorted[0]);
	for (let i = 0; i < sorted.length; i++) {
		if (sorted[i] > sorted[i - 1] && sorted[i] === sorted[i - 1] + 1) {
			longestSequence.push(nums[i]);
		}
	}
	return longestSequence.length;
}

console.log(longestConsecutive([5, 100, 0, 1, 2, 3, 200, 35]));
