function maximumOfTwo(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
var maximum = maximumOfTwo(96, 85);
console.log("The maximum of 96 and 58 is: ".concat(maximum));
