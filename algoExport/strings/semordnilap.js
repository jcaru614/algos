function semordnilap(words) {
  let hashMap = new Map();
  let semordnilapPairs = [];

  for (const index in words) {
    let word = words[index];
    const reversedWord = word.split("").reverse().join("");
    if (hashMap.has(reversedWord)) {
      semordnilapPairs.push([word, reversedWord]);
    }
    hashMap.set(word, index);
  }

  return semordnilapPairs;
}

console.log(
  semordnilap(["dog", "hello", "desserts", "test", "god", "stressed"])
);
