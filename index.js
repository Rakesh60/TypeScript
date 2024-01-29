// //generic
// function gen<T>(a,b){
//     return [a,b]
// }
// console.log(gen<string>('1','2'));
// console.log(gen<number>(1,2));
// Generics
function gen(a, b) {
    return [a, b];
}
console.log(gen('1', '2'));
console.log(gen(1, 2));
console.log(gen([1], [2]));
