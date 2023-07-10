# Lesson 5: Numbers

## Contents

1. [Initialization](#1-initialization)
2. [Keywords and Methods](#2-keywords-and-methods)

---
## 1. Initialization
- The usual way when we declare a number:
```javascript
     var million = 1000000;

     OR: // Using 'e' notation

     var million = 1e6;
```

## 2. Keywords and Methods:

| Num. | Method Name | Keyword | Description | Note | Field |
|------|-------------|---------|-------------|------|-------|
| 1 | parseInt() | Method | Converts a string to an integer | | Conversion |
| 2 | parseFloat() | Method | Converts a string to a floating-point number | | Conversion |
| 3 | toExponential() | Method | Returns a string containing a number represented in exponential notation | | Conversion |
| 4 | toFixed() | Method | Returns a string representing a number in fixed-point notation | | Conversion |
| 5 | toString() | Method | Returns a string representation of an object. (default: base 10 = decimal) | | Conversion |
| 6 | toLocaleString() | Method | Converts a number to a string by using the current or specified locale | | Conversion |
| 7 | toPrecision() | Method | Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits | | Conversion + Round number |
| 8 | isFinite() | Method | Returns true if passed value is finite. Unlike the global isFinite, Number.isFinite doesn't forcibly convert the parameter to a number. Only finite values of the type number, result in true | `Number.isFinite(value)` | Checking if the value is a number |
| 9 | isFinite() | Function | Determines whether a supplied number is finite | `isFinite(value)` | |
| 10 | isInteger() | Method | Returns true if the value passed is an integer, false otherwise | | |
| 11 | isSafeIntefer() | Method | Returns true if the value passed is a safe integer | | |
| 12 | isNaN() | Method | Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter to a number. Only values of the type number, that are also NaN, result in true | | |
| 13 | isNaN() | Function | Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number) | | |
| 14 | EPSILON | Property | `2.220446049250313e-16`| | |
| 15 | MAX_SAFE_INTEGER | Property | `9007199254740991` | | |
| 16 | MIN_SAFE_INTEGER | Property | `-9007199254740991` | | |
| 17 | MIN_VALUE | Property | `5e-324` | | |
| 18 | MAX_VALUE | Property | `1.7976931348623157e+308` | | |
| 19 | POSITIVE_INFINITY | Property | `Infinity` | | |
| 20 | NEGATIVE_INFINITY | Property | `-Infinity` | | |
| 21 | NaN | Property | `NaN` | | |