// given an array and a 2d array count how many times the elements of the first array
// appear for each of the arrray of the second array. If it is in each array then count 1

function countSignals(frequencies, filterRanges) {
    // return the count of the frequences
        let counter = 0;
        for(let i = 0; i < frequencies.length; i++) {
            for(let j = 0; j< filterRanges.length; j++ ) {
                if(frequencies[i] < filterRanges[j][0] || frequencies[i] > filterRanges[j][1]) {
                    break; 
                }
                if(j===filterRanges.length-1) counter += 1;
            }
    
        }
        return counter;
    }
    
    console.log(countSignals([8,15,14,16,21], [[10,17], [13,15], [13,17]]));