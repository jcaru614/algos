function addUpTo(n) {
    let count = 0
    for (let i = 1; i <= n; i++) {
        count += i
    }
    return count
}

console.log(addUpTo(6));

function addUpTo2(n) {
    return n * (n + 1) / 2
}

console.log(addUpTo2(8));
