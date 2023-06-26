# Lesson 1: How to run, variables and comments

## Contents
1. [How to run JavaScript](#1-how-to-run-javascript)
2. [Variables](#2-variables)
3. [Comments](#3-comments)
4. [Built-in notation](#4-built-in-notation)

---
## 1. How to run JavaScript
- Download **the extensions** for JavaScript and **Live Server**
- Create 2 files: **main.js** and **index.js**
- In **index.js**, we type "html:5" to print out this code:
```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
     </head>
     <body>
     </body>
     </html>
```
- In **main,js**, we type:
```javascript
     alert('Hello World!'); // alert function

     OR:

     console.log('Hello World'); // print function
```
- Finally, we run **"Live Server"** or **console** to see the result

## 2. Variables
- To declare a variable, we can use the keyword **var** which means 'variable':
```javascript
     var fullName; // Declare a variable
     fullName = 'Pham Gia Phuc'; // Assign a value to a variable

     console.log(fullName); // Print out the value in the console
```
- To declare multiple variables, we use semicolons:
```javascript
     var name = 'John', age = 18, address = 'Vietnam';

     OR:
     
     var name = 'John',
          age = 18,
          address = 'Vietnam';
```
- Naming variable rules:
```javascript
     // Correct naming variables
     var name = 'John';
     var first_name = 'Alexander';
     var fullName = 'John Alexander';
     var f8 = 8;

     // Incorrect naming variables
     var first-name = 'Alexander';
     var 8f = 8;
```
> The variable's name must be specific and accurate in the function to have a clean and performance code.
- Using the **single quote** or **double quotes** in string variable type are no different at all, but recommned to use **double quotes** for **better readability**:
```javascript
     var name = 'John' // Single quote
     var name = "John" // Double quotes
```
- Assigning value from this variable to another variable:
```javascript
     var a = 1;
     var b = a; // 1
```

## 3. Comments
- Using comments to increase the readability of the code.
- How to use:
```javascript
     // Single line

     /**
      * Multiple lines
     */
```

## 4. Built-in Notation
- 6 standard built-in objects:
```javascript
     // Alert
     alert("Hello World!");
     // Console
     console.log("Hello World!");
     // Confirm
     confirm("Press a button!"); 
     // Prompt
     prompt("Your age?");
     // Set timeout
     setTimeout(function() {
          console.log("Hello World!"); // Print out the "Hello World" after 1s
     }, 1000 // 1000ms
     )
     // Set interval
     setInterval(function() {
          console.log("Hello World!"); // Print out multiple times the "Hello World" after 1s
     }, 1000 // 1000ms
     )
```

