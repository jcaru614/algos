function firstNonRepeatingCharacterWithMap(string) {
  let charactersMap = new Map();

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!charactersMap.has(char)) {
      charactersMap.set(char, [1, i]);
    } else {
      charactersMap.get(char)[0] += 1;
    }
  }
  // console.log("dfdff", charactersMap.values());
  for (const [key, value] of charactersMap.entries()) {
    console.log("dfdff", key, value);
    if (value[0] === 1) return value[1];
  }
  return -1;
}

function firstNonRepeatingCharacter(string) {
  let charactersObj = {};

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    charactersMap.has(char)
      ? (charactersMap.get(char)[0] += 1)
      : charactersMap.set(char, [1, i]);
  }

  for (const [key, value] of Object.entries(charactersObj)) {
    if (value[0] === 1) return value[1];
  }
  return -1;
}
console.log(firstNonRepeatingCharacterWithMap("abcdcaf"));
console.log(firstNonRepeatingCharacter("abcdcaf"));
