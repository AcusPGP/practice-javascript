var languages = [
     "Java",
     "Python",
     "JavaScript"
];

console.log(languages); // Print out the array
console.log(languages[0]); // Acess and print out the element in the array
console.log(languages.length); // Return the length of the array
console.log(languages.toString()); // (Method) Returns a string representation of an array.
console.log(languages.join(" - ")); // (Method) Adds all the elements of an array into a string, separated by the specified separator string.
console.log(languages.pop()); // (Method) Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(languages.push("Rush")); // (Method) Appends new elements to the end of an array, and returns the new length of the array.
console.log(languages.shift()); // (Method) Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(languages.unshift("HTML")); // (Method) Inserts new elements at the start of an array, and returns the new length of the array.

// Changing elements by index
languages[0] = "CSS";
languages[languages.length] = "NodeJS";
console.log(languages.toString()); // CSS,Python,Rush,NodeJS

// Delete method
delete languages[languages.length - 1];
console.log(languages.toString()); // CSS,Python,Rush,<undefined>
console.log(languages.length);

// Merge arrays
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [3, 4 ,5];

console.log(num1.concat(num2)); // (Method) Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(num1.concat(num2, num3));
console.log(num1.concat(7));

// Flatten array
var a = [[1, 2], [3, 4], [5, 6]]; // 2 dimensions array
var b = [[1, 2, 3], [7, 8, 9], [4, 5, 6]] // 3 dimensions array

console.log(a.flat()); // (Method) Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(b.flat());

// Splice and slice array
languages.splice(languages.length - 1, 1, "NodeJS"); // (Method) Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(languages);
languages.splice(1, 1);
console.log(languages);

console.log(languages.slice(1)); // (Method) Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
console.log(languages.slice(0, 2));