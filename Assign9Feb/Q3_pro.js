function reverseArray(arr) {
    var reversed = [];
    for (var i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        reversed[j] = arr[i];
    }
    return reversed;
}
var realArray = [5, 2, 8, 1, 9];
var reversedArray = reverseArray(realArray);
console.log('Original array:', realArray);
console.log('Reversed array:', reversedArray);
