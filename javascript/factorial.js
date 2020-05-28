function factorial(num) {
    var multiplyCounter = 1;
    for (let i = 1; i <= num; i++) {
        multiplyCounter = multiplyCounter * i;
    }
    return multiplyCounter;
  }
  factorial(3);