// a binary number is a combination of 1s and 0s 
// its nth least significant digit is the nth digit starting from the right starting with 1. 
// given a decimal number convert it to binary and determine the value of the 4th least significant digit
function fourthBit(number) {
    // converting decimal number to binary in string form to be able to itterate 
    number = (number >>> 0).toString(2);
    // find the 4th from last least significant digit
    let lsd4th = number[number.length-4]
    // return that digit back into integer form
    return parseInt(lsd4th)
}

console.log(fourthBit(32));
