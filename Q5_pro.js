var num = 45; //45
var prime = true;
if (num === 1) {
    console.log("Given Number is not Valid to Check Prime number");
}
else if (num > 1) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log("".concat(num, " is a prime number"));
    }
    else {
        console.log("".concat(num, " is a not prime number"));
    }
}
