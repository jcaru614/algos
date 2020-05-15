
function collectStrings(dict) {
    let array = []
    for (let key in dict)
        if (typeof dict[key] === 'string') {
            array.push(dict[key])
        } else if (typeof dict[key] !== 'string') {
            array = array.concat(collectStrings(dict[key]))
        }
    return array
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])