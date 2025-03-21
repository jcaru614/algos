// Given an integer array `nums` and an integer `k`,
// return the `k` most frequent elements in the array.
//
// You may return the answer in any order.
// Your solution must be better than O(n log n) time — ideally O(n).
//
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// 1 and 2 are the k(2) most frequent elements
// Example 2:
// Input: nums = [1], k = 1
// Output: [1]

function topKFrequent(nums, k) {
  // creat a map to store the key values with values being the count
  // sort the values of the entries from largest to smallest
  // slice up to k to get the keys
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    map[num] ? (map[num] += 1) : (map[num] = 1);
  }
  console.log(map);
  const sorted = Object.entries(map)
    .sort((a, b) => a[1] - b[1])
    .slice(0, k)
    .map((entry) => Number(entry[0]));
  console.log('sorted ', sorted);
  return sorted;
}

console.log(topKFrequent([1, 1, 1, 2, 3, 3], 2)); // Expected: [1, 3]
