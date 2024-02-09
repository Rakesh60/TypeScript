function factorial(n: number): number {

    let result = 1;
    let i = 1;
    while (i <= n) {
        result = result * i;
        i++;
    }
    return result;
}


let number = 5;
let factorialValue = factorial(number);
console.log(`Factorial of ${number} is ${factorialValue}`);
