function commonCharacters(strings) {
  let stringsLength = strings.length;
  if (stringsLength === 1) {
    return strings;
  }
  let charFrequency = {};
  let flatStrings = strings.join("");
  let commonChars = [];

  for (const item in flatStrings) {
    let char = flatStrings[item];
    charFrequency[char] = charFrequency[char] ? (charFrequency[char] += 1) : 1;
  }
  for (const key in charFrequency) {
    if (charFrequency[key] >= stringsLength) {
      commonChars.push(key);
    }
  }
  return commonChars;
}

function commonCharactersWithMap(strings) {
  let stringsLength = strings.length;
  if (stringsLength === 1) {
    return strings;
  }
  let charFrequency = new Map();
  let flatStrings = strings.join("");
  let commonChars = [];

  for (const item in flatStrings) {
    console.log("index ", item);
    let char = flatStrings[item];
    charFrequency.set(
      char,
      charFrequency.has(char) ? charFrequency.get(char) + 1 : 1
    );
  }
  for (const [key, value] of charFrequency.entries()) {
    if (value >= stringsLength) {
      commonChars.push(key);
    }
  }

  return commonChars;
}

console.log(commonCharacters(["abc", "bcd", "cbad"]));
console.log(commonCharactersWithMap(["*abcd", "def*", "******d*****"]));
