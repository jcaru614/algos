function sumRange(num){
    if (num === 1) {
        return 1
    } else {
        console.log(num);
        return num + sumRange(num-1)   
    }
}
console.log(sumRange(4))
// return 4 + sumRange(3) becomes 4 + 6 === 10
            // return 3 + sumRange(2) becomes 3 + 3 === 6
                        // return 2 + sumRange(1) becomes 2 + 1 === 3
                                    // return 1