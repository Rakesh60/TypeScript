var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CAR = /** @class */ (function () {
    function CAR(myMake, myModel, myYear) {
        this.make = myMake;
        this.model = myModel;
        this.year = myYear;
        this.start();
    }
    CAR.prototype.start = function () {
        console.log('The Model-->' + this.model + ' is make by-->' + this.make + ' in the Year-->' + this.year + ' is Starting');
    };
    return CAR;
}());
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(myMake, myModel, myYear, offRoad) {
        var _this = _super.call(this, myMake, myModel, myYear) || this;
        _this.offRoading = offRoad;
        _this.offRoadCapable();
        return _this;
    }
    SUV.prototype.offRoadCapable = function () {
        console.log(this.offRoading);
    };
    return SUV;
}(CAR));
var mySuv = new SUV('Tata', 5221, 2023, 'NotCapable');
//mySuv.offRoadCapable()
