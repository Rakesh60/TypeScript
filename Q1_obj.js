var Calculator = /** @class */ (function () {
    function Calculator(mera1, mera2) {
        this.num1 = mera1;
        this.num2 = mera2;
    }
    Calculator.prototype.finalValue = function () {
        var product = this.num1 * this.num2;
        var divided = product / 5;
        var subtracted = 100 - divided;
        var added = subtracted + 75;
        return added;
    };
    return Calculator;
}());
var obj1 = new Calculator(8, 6);
var res = obj1.finalValue();
console.log(res);
