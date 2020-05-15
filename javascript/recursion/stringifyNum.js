
function stringifyNumbers(dict) {
    for(let key in dict) 
    if(typeof dict[key] !== 'number') {
        stringifyNumbers(dict[key])
    } else if (typeof dict[key] === 'number') {
        dict[key] = dict[key].toString()
    }
    return dict
  }

let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj1))

