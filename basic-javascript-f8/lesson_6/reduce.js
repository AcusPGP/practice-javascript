// Practice problems for reduce method

// Problem 1: Flat complex array to one dimension array
// var numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reduce((total, number) => {
//      return total + number;
// }));

// Problem 2: Flat complex array to one dimension array
// var complexArray = [1, 2, [1, 3], 4, 5, [6, 7, 8, 9]];

// console.log(complexArray.reduce((a, b) => {
//      return a.concat(b);
// }, []).toString())

// Expected results:
var arr = [
     ['name', 'Sơn Đặng'],
     ['age', 18],
];
 
function arrToObj (arr) {
     return arr.reduce((a, [key, value]) => {
         a[key] = value;
         return a;
     }, {});
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }