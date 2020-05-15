// return a new array of capitalzied words

function capitalizeWords(words, capWords) {
    if (words.length === 0) {
        return capWords
    }
    let push = words[0].toUpperCase();
    capWords.push(push);
    return capitalizeWords(words.slice(1), capWords);
}

console.log(capitalizeWords(['hello', 'i', 'am', 'joey'], []));
    // ['I', 'AM', 'LEARNING', 'RECURSION']

// capitalizeWords(['i', 'am', 'learning'])
//  capWords = []
//        push = 'I'
//            capWords = ['I']
                // return ['I] + capitalizeWords(['am', 'learning', 'recursion'])
                //  capWords = []
                //      push = 'AM'
                //          capWords = ['AM']
                            //  return ['AM'] + capitalizeWords(['learning'])
                            //      capWords = []
                            //          push = 'LEARNING'
                            //              capWords = ['LEARNING']
                            //                  return ['LEARNING'] + capitalizeWords([])