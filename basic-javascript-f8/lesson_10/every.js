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

Array.prototype.every2 = function(callback) {
     for (var index in this) {
          if (this.hasOwnProperty(index)) {
               if (callback(this[index].isAvaliable)) {
                    return false;
               }
          }
     }
     return true;
}

console.log(courses.every2((condition) => {
     return condition;
}))