var BUS = /** @class */ (function () {
    function BUS(myMake, myModel, myYear) {
        this.make = myMake;
        this.model = myModel;
        this.year = myYear;
        this.start();
    }
    BUS.prototype.start = function () {
        console.log('The Model-->' + this.model + ' is make by-->' + this.make + ' in the Year-->' + this.year + ' is Starting');
    };
    return BUS;
}());
var Bus = new BUS('Mercedes', 7441, 2023);
//Bus.start();
