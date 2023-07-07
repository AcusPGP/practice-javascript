# Lesson 4: Strings

## Contents

---
## 1. Initialization
- Initialize a string by using double quotes or single quotes
```javascript
     // Declare variables

     var fullName_1 = "Hello 'World'"; // Double quotes + Single quotes
     var fullName_2 = 'Hello \'World\''; // Single quotes + Backlash

     console.log(fullName_1); // Hello 'World'
     console.log(fullName_2); // Hello 'World'
```

## 2. Keywords & Methods

| Num. | Method Name | Keyword | Description | Note |
|------|-------------|---------|-------------|------|
| 1 | `length` | Property | Returns the length of a string object | |
| 2 | `constructor` | Property | Returns the function that created the String prototype | `ƒ String() { [native code] }` |
| 3 | `charAt()` | Method | Returns the character at the specified index | |
| 4 | `at()` | Method | Returns the character at the specified index | |
| 5 | `charCodeAt()` | Method | Returns the unicode value or ascii value in decimal form of the character at the specified index | |
| 6 | `codePointAt()` | Method | Returns the unicode value or ascii value in decimal form of the character at the specified index | |
| 7 | `fromCharCode()` | Method | Returns character converted unicode values | `String.fromCharCode(108)` |
| 8 | `fromCodePoint()` | Method | Returns character converted unicode values | `String.fromCodePoint(108)` |
| 9 | `includes()` | Method | Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false | |
| 10 | `endsWith()` | Method | Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false | |
| 11 | `startsWith()` | Method | Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false | |
| 12 | `substring()` | Method | Returns the substring at the specified location within a String object | |
| 13 | `substr()` | Method | Same as `substring()` | |
| 14 | `slice()` | Method | Returns the substring at the specified location within a String object | |
| 15 | `indexOf()` | Method | Returns the position of the first occurrence of a substring | |
| 16 | `lastIndexOf()` | Method | Returns the last occurrence of a substring in the string | |
| 17 | `search()` | Method | Return the index of the first substring match in a regular expression search | |
| 18 | `split()` | Method | Split a string into substrings using the specified separator and return them as an array | |
| 19 | `trim()` | Method | Removes the leading and trailing white space and line terminator characters from a string (Both sides) | |
| 20 | `trimStart()` | Method | Removes the leading white space and line terminator characters from a string (Left side) | |
| 21 | `trimEnd()` | Method |  Removes the leading white space and line terminator characters from a string (Right side) |
| 22 | `padStart()` | Method | Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string | |
| 23 | `padEnd()` | Method |  Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string | |
| 24 | `concat()` | Method | Returns a string that contains the concatenation of two or more strings | |
| 25 | `repeat()` | Method | Returns a string value that is made from count copies appended together. If count is 0, the empty string is returned | |
| 26 | `replace()` | Method | Replaces first text or character in a string, using a regular expression or search string | |
| 27 | `replaceAll()` | Method | Replaces all text or character in a string, using a regular expression or search string | |
| 28 | `match()` | Method | Matches a string with a regular expression, and returns an array containing the results of that search | |
| 29 | `localeCompare()` | Method | Determines whether two strings are equivalent in the current or specified locale | One of 3 return values: -1 if the string is sorted before the compareString; 0 if the two strings are equal; 1 if the string is sorted after the compareString |
| 30 | `toLowerCase()` | Method | Converts all the alphabetic characters in a string to lowercase | |
| 31 | `toUpperCase()` | Method | Converts all the alphabetic characters in a string to uppercase | |
| 32 | `toLocaleLowerCase()` | Method | Converts all alphabetic characters to lowercase, taking into account the host environment's current locale | |
| 33 | `toLocaleUpperCase()` | Method | Converts all alphabetic characters to lowercase, taking into account the host environment's current locale | |
| 34 | `toString()` | Method | Convert to a string type and return it as a string | |
| 35 | `valueOf()` | Method | Returns the primitive value of the specified object | |
