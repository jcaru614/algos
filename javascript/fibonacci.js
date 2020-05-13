function fibonacciGenerator (n) {
    var sequence = [];
    for(var i = 0; i < n; i++) {
        if(i < 2) {
            sequence.push(i);
        } else {
            var num = sequence[i - 1] + sequence[i - 2];
            sequence.push(num);
        }
    }
    return(sequence);
}
