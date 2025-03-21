// Given an array nums of n integers, are there elements a, b, c in nums 
// such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

var sum3tozero = function(nums) {
    subsets = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length; j > 0; j--) {
            if (nums[i] + nums[j] +nums[j-1] == 0 && i!=j && i!=j-1) {
                subsets.push([nums[i],nums[j],nums[j-1]])
            }
        }
    }
    return subsets;
};

console.log(sum3tozero([-1, 0, 1, 2, -1, -4]))