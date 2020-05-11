function fizzBuzz(n) {
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz", '\n')
        } else if (i % 3 ===0) {
            console.log("Fizz", '\n')
        } else if (i % 5 === 0) {
            console.log("Buzz", '\n')
        } else {
            console.log(i + '\n')
        }
        }
    }
    console.log(fizzBuzz(100));





function fizzBuzz() {
    var output = [];
    var count = 1;
    while(count <= 100) {

  if(count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if(count % 3 === 0) {
        output.push("Fizz");
    } else if(count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    
    count++;

    }
    console.log(output);
}



    