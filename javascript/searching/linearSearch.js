function linSearch(array, value) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        } else {
            return -1;
        }

    }
}
console.log(linSearch([4, 3, 9, 5, 2, 5, 4, 7, 5, 1, 2, 9], 3))