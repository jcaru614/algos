const productArray = (array) => {
    if (array.length === 0) {
        return 1
    }
    return array[0] * productArray(array.slice(1))
}

console.log(productArray([2,4,6,8]));
