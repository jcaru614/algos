// loop over the longer string
// loop over the shorter string
// if the characters dont match break out of inner loop
// keep going till you hit end of short string
// if you find match, increment counter
// return count

const stringSearch = (long, short) => {
    let foundStr = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i+j]) {
                break;
            }
            if (j === short.length-1) {
                console.log('short string is in long string')
                foundStr++;
            }
        }
    }
    return foundStr;
}

console.log(stringSearch('lorie loled', 'lol'));