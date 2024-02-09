function factorial(n) {
    var result = 1;
    var i = 1;
    while (i <= n) {
        result = result * i;
        i++;
    }
    return result;
}
var number = 5;
var factorialValue = factorial(number);
console.log("Factorial of ".concat(number, " is ").concat(factorialValue));
