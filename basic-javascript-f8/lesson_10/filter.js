var courses = [
     {
          id: 1,
          name: "Java",
          coin: 250          
     }, 
     {
          id: 2,
          name: "Python",
          coin: 200 
     },
     {
          id: 3,
          name: "C++",
          coin: 200 
     }
]

// var filterCourses = courses.filter((course, index, array) => {
//      return course.coin < 250;
// });
// console.log(filterCourses);
// console.log(filterCourses.length);

Array.prototype.filter2 = function(callback) {
     var temp = [];
     for (var index in this) {
          if (this.hasOwnProperty(index)) {
               if(callback(this[index].coin)) {
                    temp.push(this[index]);
               }
          }
     }
     return temp;
}

var output = courses.filter2((course) => {
     return course < 250;
});

console.log(output);