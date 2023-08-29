// Given an array of duplicated elements. Sort the duplicated elements

var array = [1, 2, 3, 5, 4, 3, 5, 5, , 1];

var output = array.filter((value, index, self) => {
     return self.indexOf(value) === index;
});
console.log(output);

Array.prototype.filter2 = function(callback) {
     let temp = [];
     for (let index = 0; index < this.length; index++) {
          if (this.hasOwnProperty(index)) {
               let value = this[index];
               if (callback(value, index, this)) {
                         temp.push(value)
               }
          }
     }
     return temp;
}

var output2 = array.filter2((value, index, array) => {
     return array.indexOf(value) === index;
});

console.log(output2);

console.log(output.sort((a, b) => {
     return a - b;
}));
console.log(output.sort((a, b) => {
     return b - a;
}))