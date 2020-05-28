// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function posToString(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = 'big';
        } else {
            arr[i] = 'small';
        }
    }
    return arr;
}
posToString([1,-2,3,-4]);

// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printLowRetHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        } else if (arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}

printLowRetHigh([1,6,3,4]);

// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function secToLast(arr) {
    var firstOdd = null;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            firstOdd = arr[i];
            break;
        }
    }
    console.log(arr[arr.length - 2])
    return firstOdd;
}
secToLast([2, 4, 7, 8, 9]);

// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function double(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]*2;
    }
    return arr;
}
double([2,4,6]);


// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPos(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }
        arr[arr.length - 1] = sum;
    }
    return arr;
}
countPos([-1, 1, 1, 1])

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensOdds(arr) {
   for (var i = 0; i < arr.length; i++) {
       if (arr[i]%2 == 1 && arr[i+1]%2 == 1 && arr[i+2]%2 == 1) {
           console.log("These are odds");
           
       } else if (arr[i]%2 == 0 && arr[i+1]%2 == 0 && arr[i+2]%2 == 0) {
        console.log("These are evens");
       }
   }
}

evensOdds([1,1,1,2,2,2,3,7,6,8,9,3,5,7,6,8,2])

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function Add1ToOddArr(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
        i++;
        console.log(arr);
    }
    return arr;
}
Add1ToOddArr([1,2,3,4,5,6,7,8]);

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "programing", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function prevLength(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}
prevLength(['coding','programing','joey']);

// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr) {
    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i] + 7;
    }
    return arr;
}
addSeven([1,2,4,6]);

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseValue(arr) {
    var x = arr.length;
    for (var i = 0; i<x/2; i++){
        var temp = arr[x-i-1];
        arr[x-i-1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
console.log(reverseValue([1,2,3,4]));

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function retNegArr(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = arr[i] * -1;
            newArr.push(arr[i])
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
retNegArr([1,-2,-4,6])

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function hungry(arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            counter = counter + 1;
            console.log('yummy');
        }
    }
    if (counter == 0) {
        console.log("I'm hungry!");
    }
}
hungry([1,2,'food',4])

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true]. 

function swap(arr) {
    var x = arr.length;
    for (var i = 0; i < (x / 2); i++) {
        var temp = arr[x - i - 1];
        arr[x - i - 1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
swap([2,8,3,4,5,6])

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArr(arr,num) {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
        newArr.push(arr[i])
    }
    return newArr;
}
scaleArr([1,2,3,4],2)