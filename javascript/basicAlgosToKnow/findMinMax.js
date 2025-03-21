// Identify the smallest and largest numbers in a given array.
const minMax = (array) => {
  let smallest = array[0];
  let largest = array[0];
  for (let i = 1; i < array.length; i++) {
    const item = array[i];
    if (item > largest) {
      largest = item;
    }
    if (item < smallest) {
      smallest = item;
    }
  }
  return [smallest, largest];
};
console.log(minMax([3, 5, 1, 2, 9, 6, 10, 8, 7])); //1, 10
