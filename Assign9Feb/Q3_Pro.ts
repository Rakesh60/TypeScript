function reverseArray(arr: number[]): number[] {
  
    let reversed: number[] = [];//we can also use spread operator to reverse



    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {

        reversed[j] = arr[i];
    }

    return reversed;
}


let realArray = [5, 2, 8, 1, 9];
let reversedArray = reverseArray(realArray);
console.log('Original array:', realArray);
console.log('Reversed array:', reversedArray);
