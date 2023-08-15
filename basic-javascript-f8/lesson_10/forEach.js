var courses = [
     "Java", "JavaScript", "Python", , "C++"
]

courses.length = 10;

// courses.forEach((a, b) => {
//      console.log(a, b);
// })

Array.prototype.forEach2 = function (callback) {
     for (var index in this) {
          // console.log("Index: ", index)
          // console.log(index, this.hasOwnProperty(index));
          if (this.hasOwnProperty(index)) {
               callback(this[index], index, this);
          }
     }
}

courses.forEach2((a, b, c) => {
     console.log(a, b, c);
});