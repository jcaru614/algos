// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

const sameFrequencyOfNums = (num1, num2) => {
  const num1String = num1.toString();
  const num2String = num2.toString();

  if (num1String.length !== num2String.length) return false;

  const numFrequencyCounter1 = {};
  const numFrequencyCounter2 = {};

  for (let i = 0; i < num1String.length; i++) {
    const digit = num1String[i];
    numFrequencyCounter1[digit] = numFrequencyCounter1[digit] ? numFrequencyCounter1[digit] + 1 : 1;
  }

  for (let i = 0; i < num2String.length; i++) {
    const digit = num2String[i];
    numFrequencyCounter2[digit] = numFrequencyCounter2[digit] ? numFrequencyCounter2[digit] + 1 : 1;
  }

  for (const key in numFrequencyCounter1) {
    if (!(key in numFrequencyCounter2)) return false;
    if (numFrequencyCounter1[key] !== numFrequencyCounter2[key]) return false;
  }

  return true;
};

console.log(sameFrequencyOfNums(3589578, 5879385)); // true
console.log(sameFrequencyOfNums(34, 14)); // false
