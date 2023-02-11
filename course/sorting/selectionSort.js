// similar to bubble sort expect it first places smaller values into sorted position.
// finds the smallest or largest value of the array and then puts it at the beginning or end of the array.
// selection sort only makes one swap on each iteration at the end while bubbleSort makes a swap every time its bigger

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j + 1] < arr[min]) {
        min = j + 1;
      }
    }
    // make sure we don't swap min and min unnecessarily 
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
};

console.log(selectionSort([3, 6, 8, 10, 2, 1, 4, 5, 7, 9]));
