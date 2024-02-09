function duplicate(arr, toFind) {
    var count = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (num === toFind) {
            count++;
        }
    }
    return count;
}
var myArray = [5, 2, 8, 1, 2, 5];
var find = 2;
var duplicateItems = duplicate(myArray, find);
console.log('Number of occurrences of', find, 'in the array:', duplicateItems);
