var courses = [
     {
          id: 1,
          name: "Java",
          price: 100,
          isAvaliable: true
     },
     {
          id: 2,
          name: "JavaScript",
          price: 120,
          isAvaliable: true
     },
     {
          id: 3,
          name: "PostgreSQL",
          price: 200,
          isAvaliable: false
     }
]

// console.log(courses.some((a, b) => {
//      console.log(b); // index
//      return a.price < 100; // condition
// }))

Array.prototype.some2 = function(callback) {
     for (var value of this) {
          if (callback(value.price)) {
               return true;
          }
     }
     return false
}

console.log(courses.some2((price) => {
     return price < 100;
}))