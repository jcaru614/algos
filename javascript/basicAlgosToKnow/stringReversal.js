const stringReversal = (string) => {
  // Split the string into an array of characters, reverse it, and join it back into a string
  return string.split('').reverse().join('');
};

console.log(stringReversal('hello')); // "olleh"
