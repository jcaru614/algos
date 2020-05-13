function subSum(arr) {
        if (arr.length <= 1) {
            return arr;
        } else {
            arr.sort(function (a, b) {
                return b - a
            })
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i]
            }
            let newArr = [arr[0]]
            let sumNewArr = newArr[0]
            for (let j = 1; j < arr.length; j++) {
                let temp = sum - sumNewArr
                if (sumNewArr <= temp) {
                    newArr.push(arr[j])
                    sumNewArr += arr[j]
                } else {
                    return newArr
                }
            }
        }
    }
    
    const nums = [9, 3, 8, 4, 7, 1, 4, 5, 2, 9]
    
    console.log(subSum(nums))