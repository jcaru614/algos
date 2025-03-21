function generateDocument(characters, document) {
  let charactersFrequency = {};
  let documentFrequency = {};

  for (let i = 0; i < characters.length; i++) {
    const element = characters[i];
    charactersFrequency[element] = charactersFrequency[element]
      ? (charactersFrequency[element] += 1)
      : 1;
  }
  for (let i = 0; i < document.length; i++) {
    const element = document[i];
    documentFrequency[element] = documentFrequency[element]
      ? (documentFrequency[element] += 1)
      : 1;
  }

  for (const key in documentFrequency) {
    if (!(charactersFrequency[key] >= documentFrequency[key])) {
      console.log(charactersFrequency[key], documentFrequency[key]);
      return false;
    }
  }
  return true;
}

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);
