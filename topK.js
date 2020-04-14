var topKFrequent = function (arr, k) {
    let count = 1;
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            count += 1
        } else if (arr[i] != arr[i + 1] && count >= k) {
            output.push(arr[i])
            count = 1;
        }
    }
    return output;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 3))