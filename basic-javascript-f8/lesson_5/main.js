// Initialize a number
var million_1 = 1000000;
var million_2 = 1e6;
console.log(million_1, million_2); // 1000000 1000000
console.log(million_1 == million_2); // true
console.log("\n");


// Object Number
var string = "100";
var helloWorld = "HelloWorld"
var num1 = 13;
var num2 = 15.3267;
var one_million = 1000000;
var null_num = null;

console.log(Number.parseInt(string)); // (Method) Converts a string to an integer.
console.log(Number.parseInt(string, 2)); // @param radix: A value between 2 and 36 that specifies the base of the number in string. If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal. All other strings are considered decimal.
console.log("\n");

console.log(Number.parseFloat(string)); // (Method) Converts a string to a floating-point number.
console.log("\n");

console.log(num1.valueOf()); // (Method) Returns the primitive value of the specified object.
console.log("\n");

console.log(num1.toExponential()); // (Method) Returns a string containing a number represented in exponential notation.
console.log(num2.toFixed(2)); // (Method) Returns a string representing a number in fixed-point notation.
console.log(num1.toString()); // (Method) Returns a string representation of an object. (default = base 10 = decimal)
console.log(num1.toString(2)); // @param radix — Specifies a radix for converting numeric values to strings. This value is only used for numbers. (Base 2 - binary)
console.log(one_million.toLocaleString("en-US", {style:"currency", currency:"USD"})); // (Method) Converts a number to a string by using the current or specified locale.
console.log(num2.toPrecision(4)); // (Method) Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
console.log("\n");

console.log(Number.isFinite(num1)); // (Method) Returns true if passed value is finite. Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a number. Only finite values of the type number, result in true.
console.log(isFinite(string)); // (Function) Determines whether a supplied number is finite.
console.log("\n");

console.log(Number.isInteger(num1)); // (Method) Returns true if the value passed is an integer, false otherwise.
console.log(Number.isSafeInteger(num1)); // (Method) Returns true if the value passed is a safe integer.

/*
 * Safe integer: The safe integers consist of all integers from -(253 - 1) to 253 - 1, inclusive (±9,007,199,254,740,991).
 * Properties:
 * - can be exactly represented as an IEEE-754 double precision number, and
 * - whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.  
 */

console.log(Number.isNaN(num1)); // (Method) Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter to a number. Only values of the type number, that are also NaN, result in true.
console.log(Number.isNaN(helloWorld));
console.log(isNaN(helloWorld));
console.log("\n");

console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log("\n");
 