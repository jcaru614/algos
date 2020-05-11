function longestSub(str) {
    let longest = 0;
    let start = 0;
    let charsSoFar = {};

    for (let i = 0; i < str.length; i++) {
      if (charsSoFar[str[i]]) {
        start = Math.max(start, charsSoFar[str[i]]);
        console.log("start",start);
        console.log("charsSoFar",charsSoFar);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      console.log("longest",longest);
      // store the index of the next str[i] so as to not double count
      charsSoFar[str[i]] = i + 1;
    }
    return longest;
  }

console.log(longestSub('joeyiamjoeyiam'));

