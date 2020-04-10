// // Part 1 Challenge
// is Pangram
// Write a standalone function that checks whether a given string contains all letters in the English alphabet, upper or lowercase.
// Given: "How quickly daft jumping zebra vex"
// => true
// Given: "John quickly extemporized five tow bags"
// => true
// Given: "apple sauce"
// => return false
// // strings must be minimum 26 characters long or else there's no reason to finish checking.
// // Part 2 Challenge
// all Permutation
// Create a standalone function that accepts a string and returns all permutations of that string. Use recursion!
// Given: "ABC"
// => ["ABC", "ACB", "BCA", "BAC", "CAB", "CBA"]

function pangram(str) {
    if (str.length < 26) {
        return false;
    }
    var newstr = str.toLowerCase();
    console.log(newstr);
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    var score = 0;

    for (let i = 0; i < alpha.length; i++) {
        for (let j = 0; j < newstr.length; j++) {
            if (alpha[i] === newstr[j]) {
                score += 1
                console.log("the score ", score)
                break;
            }
        }
    }
    if (score >= 26) {
        return true;
    } else {
        return false;
    }

}

console.log(pangram("John quickly extemporized five tow bags"))