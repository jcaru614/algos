function runLengthEncoding(string) {
  let encodedString = "";
  let encodedCount = 1;

  for (let i = 0; i < string.length; i++) {
    const currentLetter = string[i];
    const nextLetter = string[i + 1];

    if (currentLetter !== nextLetter || encodedCount === 9) {
      encodedString += `${encodedCount}${currentLetter}`;
      encodedCount = 1;
    } else {
      encodedCount += 1;
    }
  }
  return encodedString;
}
console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
