// given an array find the percentage of positive, negative and zeros in the array

function percentage(arr) {
    var countzero = 0
    var countneg = 0
    var countpos = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            countzero += 1
            console.log(countzero)
        } else if (arr[i] < 0) {
            countneg += 1
            console.log(countneg)
        } else if (arr[i] > 0) {
            countpos += 1
            console.log(countpos)
        }
    }
        countzero = (countzero/arr.length)*100
        countpos = (countpos/arr.length)*100
        countneg = (countneg/arr.length)*100
        console.log("answer 0 %",countzero)
        console.log("answer - %",countneg)
        console.log("answer + %",countpos) 
        console.log(countzero + countpos + countneg)
  }
  percentage([0,1,1,1,2,-2,-4,0,4])