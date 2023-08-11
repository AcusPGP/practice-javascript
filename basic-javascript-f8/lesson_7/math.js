// Math Object = Properties (Constants) + Methods

/**
 * Math Properies (Constants)
 */
console.log("Euler's number:", Math.E); // Returns Euler's number
console.log("Pi:", Math.PI); // Returns Pi number
console.log("Square root of 2:", Math.SQRT2); // Returns the square root of 2
console.log("Square root of 1/2:", Math.SQRT1_2); // Returns the square root of 1/2
console.log("The natural logarithm of 2:", Math.LN2); // Returns the natural logarithm of 2
console.log("The natural logarithm of 10:", Math.LN10); // Returns the natural logarithm of 10
console.log("Base 2 logarithm of E:",Math.LOG2E); // Returns base 2 logarithm of E
console.log("Base 10 logarithm of E", Math.LOG10E); // Returns base 2 logarithm of E
console.log("\n");

/**
 * Math methods --> Math.method(number)
 */

// Number to integer
console.log(Math.round(4.4)); // Returns x rounded to its nearest integer
console.log(Math.round(4.8));
console.log(Math.ceil(4.4)); // Returns x rounded up to its nearest integer
console.log(Math.floor(4.8)); // Returns x rounded down to its nearest integer
console.log(Math.trunc(4.4)); // Returns the integer part of x (new in ES6)
console.log("");

console.log(Math.sign(3)); // Returns if x is negative (-1), null (NaN), positive (1) or zero (0):
console.log(Math.pow(5, 2)); // Returns the square root of x
console.log(Math.sqrt(4)); // Returns the square root of x
console.log(Math.abs(-4)); // 