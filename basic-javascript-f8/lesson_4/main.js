var fullName_1 = "Hello World"

console.log(fullName_1);

console.log(fullName_1.length); // (Property) Returns the length of a String object.

console.log(fullName_1.charAt(2)); // (Method) Returns the character at the specified index.
console.log(fullName_1.charCodeAt(2)); // (Method) Returns the unicode value or ascii value in decimal form of the character at the specified location.
console.log(fullName_1.codePointAt(2)); // (Method) Returns the Unicode value of the character at the specified index in a string.

console.log(fullName_1.substring(0, 5)); // (Method) Returns the substring at the specified location within a String object.
console.log(fullName_1.substr(0, 5));
console.log(fullName_1.slice(0, 5)); // (Method) Returns a section of a string.
console.log(fullName_1.slice(-5, -1)); // (Method) Returns a section of a string.


console.log(fullName_1.replace("l", "x")); // (Method) Replaces first text or character in a string, using a regular expression or search string.

console.log(fullName_1.indexOf("l")); // (Method) Returns the position of the first occurrence of a substring.
console.log(fullName_1.indexOf("l", 4)); // (Method) Returns the index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
console.log(fullName_1.lastIndexOf("l")); // (Method) Returns the last occurrence of a substring in the string.
console.log(fullName_1.search("l")); // (Method) Finds the first substring match in a regular expression search.


console.log(fullName_1.split(" ")); // (Method) Split a string into substrings using the specified separator and return them as an array.

console.log(fullName_1.trim()); // (Method) Removes the leading and trailing white space and line terminator characters from a string.

console.log(fullName_1.toLowerCase()); // (Method) Converts all the alphabetic characters in a string to lowercase.
console.log(fullName_1.toUpperCase()); // (Method) Converts all the alphabetic characters in a string to uppercase.
console.log(fullName_1.toLocaleLowerCase()); // (Method) Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.
console.log(fullName_1.toLocaleUpperCase()); // (Method) Converts all alphabetic characters to uppercase, taking into account the host environment's current locale.

