function kapercorn(num) {
    let temp = String(num);
    let tempArr = []
    let maxNum = '';
    let minNum = '';

    for (let i = 0; i < 4; i++) {
        tempArr.push(parseInt(temp[i]))
    }
    tempArr.sort(function (a, b) {
        return b - a
    })
    for (let i = 0; i < tempArr.length; i++) {
        maxNum +=String(tempArr[i])
        minNum = String(tempArr[i]) + minNum
    }
    maxNum = parseInt(maxNum);
    minNum = parseInt(minNum)
    let sub = maxNum - minNum
    sub=String(sub)
    if (sub.length == 3){
        sub+='0' 
    }
    console.log('sub after zero', sub)
    parseInt(sub)
    if (sub == 6174) {
        return 1
    }
    counter = 1 + kapercorn(sub)
    return counter
}

console.log(kapercorn(9831));