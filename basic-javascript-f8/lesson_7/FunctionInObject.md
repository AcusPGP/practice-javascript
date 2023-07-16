## 1. Function declarations in an object
- In JavaScript, the arrow function `() => {}` does not have its own this binding. Instead, it inherits the this value from its surrounding scope. In the case of the getName arrow function within the myObject object, the surrounding scope is likely the global scope or the scope in which myObject is defined.
- Therefore, when you use this.name inside the getName function, it does not refer to the name property of the myObject object as you intended. Instead, this.name will likely refer to a name property defined in the global scope or the closest scope above myObject.
- To fix this issue and make getName return the value of the name property in the myObject object, you should use a regular function declaration or a method shorthand syntax instead of an arrow function. Here's an example:

```js
var myObject = {
     name: "Acus",
     age: 18,
     address: "Vietnam",
     maleOrFemale: true,
     getName: function() { // Do not use () => {}
          return this.name;
     }
};
```
- In this case, the getName function will correctly return the value of the name property within the myObject object when called.