// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function getAllValues() {
    var arr = [];
    for(var i = 1; i<=255; i++) {
           arr.push(i);
    }
    return arr;
}
console.log(getAllValues());

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function sumEvenNum() {
    var sum = 0;
    for (var i = 1; i<=1000; i++) {
        if(i%2 == 0);
        sum = sum + i;
    }
    return sum;
}
console.log(sumEvenNum());


// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sumOddNum() {
    var sum = 0;
    for (var i = 1; i<=5000; i++) {
        if (i%2 == 1)
        sum = sum + i;
    }
    return sum;
}
console.log(sumOddNum());

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function retSumArr(arr) {
    var sum = 0;
    for(var i = 0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log(retSumArr([1,2,3,4]));

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function retMaxNum(arr) {
    var max = arr[0];
    for (var i = 0; i<arr.length; i++) {
        if (max < arr[i])
            max = arr[i];
    }
    return max
}
console.log(retMaxNum([1,2,9,4,6]));

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAvg(arr) {
    var sum = 0;
    for (var i = 0; i<arr.length; i++) {
        sum = sum + arr[i];
        var avg = sum/arr.length
    }
    return avg;
}
console.log(findAvg([2,2,4,4,6,6,2]));

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddArray(arr) {
    var odds = [];
    for (var i = 0; i<arr.length; i++){
        if (i%2 == 1)
        odds.push(i);
    }
    return odds;
}
console.log(oddArray([1,2,3,4,5]));


// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr){
    var y = 11;
 for (var i=0; i<arr.length; i++) {
     if (arr[i] > y)
     console.log (arr[i]); 
 }     
}
greaterThanY([2,4,6,10,30,5,65,100,205]);

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squared(arr) {
    for (var i=0; i<arr.length; i++){
    arr[i] = arr[i]*arr[i];
    }
    return arr;
}
console.log(squared([2,4,5]));

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function repNeg(arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr
}
console.log(repNeg([1,-2,3,-4]));

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxminavg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            sum = sum + arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
            sum = sum + arr[i];
        } else {
            sum = sum + arr[i];
        }
    }
    var avg = sum / arr.length;
    console.log(max);
    console.log(min);
    console.log(avg);
}

maxminavg([2, 8, 16, 20]);


// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr) {
        var change1 = arr.pop();
        var change2 = arr.shift();
        arr.unshift(change1);
        arr.push(change2);
        return arr;
    }
    console.log(swap([1,2,3,4]));
    

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function negToString (arr) {
    for(var i=0; i<arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
        return arr
}
    console.log(negToString([-1,2,3,-4,-8,5]));