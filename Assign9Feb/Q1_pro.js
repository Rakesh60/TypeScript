function findMaxMin(myArray) {
    var max = myArray[0];
    var min = myArray[0];
    for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
        var arr = myArray_1[_i];
        if (arr > max) {
            max = arr;
        }
        if (arr < min) {
            min = arr;
        }
    }
    return { bada: max, chota: min };
}
var numbers = [5, 2, 8, 1, 9];
var _a = findMaxMin(numbers), max = _a.bada, min = _a.chota;
console.log('Maximum:', max);
console.log('Minimum:', min);
