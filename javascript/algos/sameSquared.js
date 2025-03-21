// square every index, slice if it array 1 exists when squared

const sameSquared = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i]**2)
        console.log(correctIndex);
        if (correctIndex === -1) {
            return false
        } 
        console.log(arr2)
        arr2.splice(correctIndex, 1)
    }
    return true
}

console.log(sameSquared([1,2,3,2], [4,9,4,1]));
