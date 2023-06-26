# Lesson 3: Functions

## Contents

-----
## 1. Functions
```javascript
     /**
      * Code 1: Declare function (1)
      */  
     function printHelloWorld() {
          console.log("Hello World!");
     }
     // Call functions
     printHelloWorld();

     /**
      * Code 2: Declare function (2)
      */ 
     const helloWorld = () => { 
          console.log("Hello World");
     }
     // Call functions
     helloWorld();
```
> Know more about `var`, `let` and `const` - click [here](./../material/VarLetConst.md)
```javascript
     /**
      * Code 3: Pass the value of parameter in the function
      */
     const full_name = (name) => {
          console.log("My name is %s", name);
     }
     // Call functions
     full_name("Gia Phuc");

     /**
      * Code 4: Return the value in the function
      */ 
     let sum = (a, b) => {
          return a + b;
     }
     console.log(sum(1,2));

     OR:

     function sum(a, b) {
          return a + b;
     }
     console.log(sum(1,2));
```