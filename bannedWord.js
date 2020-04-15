// Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

// Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

var mostCommonWord = function (paragraph, banned) {
    let para = paragraph.toLowerCase().replace(',', '').split(" ").sort()
    let dict = {};
    for (let i = 0; i < para.length; i++) {
        // dict[i] = para[i];
        if (dict[para[i]] != undefined) {
            dict[para[i]] += 1
        } else {
            dict[para[i]] = 1
        }
    }
    let theWord = para[0]
    let greater = dict[theWord]
    for (var word in dict) {
        if (dict[word] > greater && !banned.includes(word)) {
            theWord = word;
        }
    }
    return theWord
};

console.log(mostCommonWord("Bob hit a ball, the hit BALL joey flew joey far after it was hit", ["hit", 'ball']))