// Object declaration
var maleOrFemale = "gender";

var myObject = { // Key: Value
     name: "Acus", // "name": "Acus" is the same
     age: 18,
     address: "Viet nam",
     [maleOrFemale]: true,
     getName: function() { // Do not use () => {} to declare functions in an object
          return this.name;
     }
};

myObject.address = "Ho Chi Minh"; // Modify the key's value in the object
myObject.email = "acus@hotmai.com"; // Add a key with a value to the object

// Acess the object and keys in the object
console.log(myObject);
console.log(myObject.name);
console.log(myObject["name"]);
var myKey = "address";
console.log(myObject[myKey]);

// Delete the key in the object;
delete myObject.address;

console.log(myObject);

// Access the function in the object;
console.log(myObject.getName());
