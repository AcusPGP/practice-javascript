# Lesson 2: Math operators and data types

## Contents

## Arithmetic Operators
| Operators  |   Syntax   |
|------------|------------|
| Addition | + |
| Substraction | - |
| Multiplication | * |
| Exponentiaion | ** |
| Division | / |
| Modulus (Division Remainder) | % |
| Increment | ++ |
| Decrement | -- |
```javascript
     // Declare variables
     var a = 5, b = 2;
     
     // Addition
     console.log(a + b); // 7

     // Substraction
     console.log(a - b); // 3

     // Multiplication
     console.log(a * b); // 10

     // Exponentiation
     console.log(a ** b); // 25

     // Division
     console.log(a / b); // 2.5

     // Modulus 
     console.log(a % b); // 1

     /**
      * Notice about the logic of increment (++) and decrement (--)
      */
     // Increment
     console.log(a++); // 5 (print 5 then add 1 becomes 6)
     console.log(++a); // 7 (add 1 becomes 7 then print 7)

     // Decrement
     console.log(b--); // 2 (print 2 then minus 1 becomes 1)
     console.log(--b); // 0 (minus 1 becomes 0 then print 0)
```

## Assignment Operators
|  Operators  |   Example  |   Same as  |
|-------------|------------|------------|
| = | x = y | x = y |
| += | x += y | x = x + y |
| -= | x -= y | x = x - y |
| **= | x **= y | x = x ** y |
| /= | x /= y | x = x / y |
| %= | x %= y | x = x % y |
| *= | x *= y | x = x * y |
```javascript
     // Declare variables
     var a = 5;

     a += 1; // 6

     a -= 2; // 4

     a **= 2 // 16

     a /= 4 // 4

     a %= 3 // 1

     a *= 2 // 2
```

