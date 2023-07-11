const languages = ["JavaScript", "Java", "Python", "Dart", "Rust"];
console.log(languages.sort()); // (Method) Sorts an array alphabetically (just string type only)
console.log(languages.reverse()); // (Method) Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

// Numeric sorted array
const number = [100, 232, 54, 23, 2, 1, 17];
console.log(number.sort(function(a, b) { // Sorted the numeric array in ascending trend
     return a - b; // The compare function
}));
console.log(number.sort(function(a, b) { // Sorted the numeric array in descending trend
     return b - a; // The compare function
}));

// The compare function: function (a, b) {return a - b}
/**
 * When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
 * If the result is negative, a is sorted before b.
 * If the result is positive, b is sorted before a.
 * If the result is 0, no changes are done with the sort order of the two values.
 */

console.log(number.sort(function() { // Sorted the numeric array in random trend
     return 0.5 - Math.random();
}));

/**
 * Here's how it works:
 * The sort() function is called on the number array.
 * Inside the sort() function, a callback function is provided. This callback function determines the sorting order of the elements.
 * The callback function is defined as an anonymous function that takes no parameters.
 * Inside the callback function, the comparison logic is implemented to sort the array randomly.
 * The comparison logic subtracts a random value between 0 and 0.5 (inclusive) from 0.5, resulting in a random positive or negative value.
 * The expression Math.random() generates a random value between 0 (inclusive) and 1 (exclusive).
 * Subtracting this random value from 0.5 gives a range between -0.5 and 0.5.
 * This means the sorting order of the elements will be randomized.
 * The sort() function uses the return value of the callback function to determine the sorting order.
     If the return value is a negative number, the first element is placed before the second element.
     If the return value is a positive number, the second element is placed before the first element.
     If the return value is 0, the order of the elements remains unchanged.
 * The sorted array is then printed to the console using console.log().
 * Overall, this code sorts the number array in a random order by using a comparison function that generates random positive and negative values.
 */

/*
OR: The Fisher Yates Method (same as the random sorted array but older in 1938!)
     const points = [40, 100, 1, 5, 25, 10];
     for (let i = points.length -1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i+1));
          let k = points[i];
          points[i] = points[j];
          points[j] = k;
     }
*/

// Find the highest/lowest value in the array
// For alphabetic array:
languages.sort(); // Need to be sorted first
console.log(languages[0]); // Lowest
console.log(languages[languages.length - 1]); // Highest

// For numeric array
number.sort(function(a, b) {
     return a - b;
})
console.log(number[0]); // Lowest
console.log(number[number.length - 1]); // Highest
console.log(Math.max.apply(null, number)); // Using the math library to get the highest value
console.log(Math.min.apply(null, number)); // Using the math library to get the lowest value