prompt ("Your Name");
prompt ("Loves Name");
var n = Math.random();
n = n * 100;
n = Math.floor(n) + 1;
if (n > 70) {
    alert ("Your love score is " + n + "%" + "you're the perfect match!");
}
if (n > 30 && n <= 70) {
    alert ("Your love score is " + n + "%" + "you suck!");
}
if (n <= 30) {
    alert ("Your love score is " + n + "%" + "No one likes you");
}
