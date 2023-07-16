// Object Constructor
function User(username, age, address) { // First letter in object constructor's name is uppercase
     this.username = username;
     this.age = age;
     this.address = address;
     this.getName = function() {
          return `Info: ${username} + ${age} + ${address}`;
     }
};

User.prototype.id = "unique"; // The key's value is in the prototype of an object
User.prototype.getId = function() {
     return this.id;
}


var author = new User("Acus", 18, "Ho Chi Minh");
var user = new User("Anna", 15, "Ha Noi");

author.title = "ABC";
user.comment = "So delicous";

console.log(author);
console.log(user);

console.log(author.constructor == user.constructor);
console.log(author.constructor == User);

console.log(author.getName());

console.log(user.getId());
