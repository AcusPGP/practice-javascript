// A callback is a function passed as an argument to another function
const myFunction = (param) => {
     param(123);
}
const myCallBack = (param) => {
     console.log(typeof(param));
}
myFunction(myCallBack);

// Practice 1: Using callback to create functions for arithmetic operations
const calculate = (a, b, cb) => {
     console.log(cb(a, b));
}

const sumCb = (a, b) => {
     return (a + b);
}
const subCb = (a, b) => {
     return (a - b);
}
const multiCb = (a, b) => {
     return (a * b);
}
const divCb = (a, b) => {
     return (a / b);
}

calculate(1, 2, sumCb);
calculate(5, 2, subCb);
calculate(1, 2, multiCb);
calculate(3, 1, divCb);

// map method in array
var courses = [
     "Java", "JavaScript", "Python"
]

var htmls_1 = courses.map(function(course) {
     return `<h2>${course}</h2>`;
});

console.log(htmls_1.toString());

Array.prototype.map2 = function(callback) {
     var arrayLength = this.length; // this refers to the object that calls the function map2() -> courses\
     var output = [];
     for (var i = 0; i < arrayLength; ++i) {
          output.push(callback(this[i]));
     }
     return output;
}

var htmls_2 = courses.map2(function(course) {
     return `<h2>${course}</h2>`;
});
console.log(htmls_2.toString());

// more about the arrays
courses.length = 10;
console.log(courses);
console.log(courses.length);

for (var index in courses) {
     console.log(index, courses[index]);
}