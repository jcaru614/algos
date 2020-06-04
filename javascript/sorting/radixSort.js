// helper 1 getDigit returns the digit in num at the given place value
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
// helper 2 digitCount returns the count of the digits
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
// helper 3 returns the max number of digits
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }  

const radixSort = (nums) => {
    let maxDigitCount = mostDigits(nums);
    // console.log(maxDigitCount);
    for (let k = 0; k < maxDigitCount; k++) {
        // creates 10 sub arrays
        let digitBuckets = Array.from({length:10}, () => [])
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
            // console.log(digitBuckets);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([23, 345, 5467, 1, 2345]));
