function capitalizeFirst(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let upper = array[i][0].toUpperCase()
        console.log(upper);
        newArr.push(upper)

    }
    return newArr

}

console.log(capitalizeFirst(['car', 'taco', 'banana']))

