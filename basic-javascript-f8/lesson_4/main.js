var text1 = "Hello World";
var text2 = "  Hello World  ";
var text3 = "Hello";
var text4 = "World";
var text5 = "example@gmail.com";
var text6 = "example";
var text7 = "@gmail.com";
var num = 1;

console.log(text1);

console.log("\n");
console.log(text1.length); // (Property) Returns the length of a String object.
console.log(text1.constructor);  // (Property) Returns the function that created the String prototype.

console.log("\n");
console.log(text1.charAt(2)); // (Method) Returns the character at the specified index.
console.log(text1.at(2)); // (Method) Returns the character at the specified index.
console.log(text1.charCodeAt(2)); // (Method) Returns the unicode value or ascii value in decimal form of the character at the specified index.
console.log(text1.codePointAt(2)); // (Method) Returns the unicode value of the character at the specified index in a string.
console.log(String.fromCharCode(108)); // (Method) Returns character converted unicode values.
console.log(String.fromCodePoint(108)); // // (Method) Returns character converted unicode values.

console.log("\n");
console.log(text1.substring(0, 5)); // (Method) Returns the substring at the specified location within a String object.
console.log(text1.substr(0, 5));
console.log(text1.slice(0, 5)); // (Method) Returns a section of a string.
console.log(text1.slice(-5, -1)); // (Method) Returns a section of a string.

console.log("\n");
console.log(text1.replace("l", "x")); // (Method) Replaces first text or character in a string, using a regular expression or search string.
console.log(text1.replaceAll("l", "x")); // (Method) Replaces all text or character in a string, using a regular expression or search string.

console.log("\n");
console.log(text1.indexOf("l")); // (Method) Returns the position of the first occurrence of a substring.
console.log(text1.indexOf("l", 4)); // (Method) The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
console.log(text1.lastIndexOf("l")); // (Method) Returns the last occurrence of a substring in the string.
console.log(text1.lastIndexOf("l", 5)); // (Method) The index at which to begin searching. If omitted, the search begins at the end of the string.
console.log(text1.search("l")); // (Method) Finds the first substring match in a regular expression search.

console.log("\n");
console.log(text1.split(" ")); // (Method) Split a string into substrings using the specified separator and return them as an array.

console.log("\n");
console.log(text1.trim()); // (Method) Removes the leading and trailing white space and line terminator characters from a string. (Both sides)
console.log(text2.trimStart()); // (Method) Removes the leading white space and line terminator characters from a string. (Left side)
console.log(text2.trimEnd()); // (Method) Removes the leading white space and line terminator characters from a string. (Right side)

console.log("\n");
console.log(text1.toLowerCase()); // (Method) Converts all the alphabetic characters in a string to lowercase.
console.log(text1.toUpperCase()); // (Method) Converts all the alphabetic characters in a string to uppercase.
console.log(text1.toLocaleLowerCase()); // (Method) Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
console.log(text1.toLocaleUpperCase()); // (Method) Converts all alphabetic characters to uppercase, taking into account the host environment's current locale.
console.log(num.toString()); // (Method) Converts to a string type and return it as a string.
console.log(typeof(num.toString()));

console.log("\n");
console.log(text1.startsWith("Hello")); // (Method) Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.
console.log(text5.endsWith("@gmail.com")); // (Method) Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at endPosition – length(this). Otherwise returns false.
console.log(text5.includes("gmail")); // (Method) Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

console.log("\n");
var text6_length = text6.length;
console.log(text6.padStart(text6_length + 5, "X")); // (Method) Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the start (left) of the current string.
console.log(text6.padEnd(text6_length + 5, "X")); // (Method) Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length. The padding is applied from the end (right) of the current string.
console.log(text6.concat(text7)); // (Method) Returns a string that contains the concatenation of two or more strings.
console.log(text3.repeat(3)); // (Method) Returns a string value that is made from count copies appended together. If count is 0, the empty string is returned.

console.log("\n");
console.log(text5.match(text6)); // (Method) Matches a string with a regular expression, and returns an array containing the results of that search.
console.log(text5.localeCompare(text6)); // (Method) Determines whether two strings are equivalent in the current or specified locale.

console.log("\n");
console.log(text1.valueOf()); // (Method) Returns the primitive value of the specified object.