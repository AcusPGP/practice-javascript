// Date object
let date = new Date(); // Default: return the present time

console.log(date);
console.log(typeof(date)); // Return type as an object

date = Date(); // Default: return the present time
console.log(date);
console.log(typeof(date)); // Return type as a string

date = new Date("October 13, 2014 11:13:00"); // new Date(date string)
console.log(date);

date = new Date(2018, 11, 24, 10, 33, 30, 0); // new Date(year, month, ...) -> 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
console.log(date);

// previous century: One and two digit years will be interpreted as 19xx
date = new Date(99, 11, 24);
console.log(date);

/**
 * JavaScript stores dates as number of milliseconds since January 01, 1970.
 * Zero time is January 01, 1970 00:00:00 UTC.
 * One day (24 hours) is 86 400 000 milliseconds.
 * Now the time is: 1689499839110 milliseconds past January 01, 1970
 */
date = new Date(100_000_000_000);
console.log(date);

// Date methods
date = new Date(); // Set date to default

// Displaying the dates
console.log("\n");
console.log(date.toString());
console.log(date.toDateString()); // More preferable choice
console.log(date.toUTCString());
console.log(date.toISOString());

// Get the specific components of date
console.log("\n");
console.log(date.getFullYear()); // (Method) Returns the year, using local time.
console.log(date.getTime()); // (Method) Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
console.log(date.getDate()); // (Method) Returns the day-of-the-month, using local time.
console.log(date.getDay()); // (Method) Returns the day of the week, using local time.
console.log(date.getHours()); // (Method) Returns the hours in a date, using local time.
console.log(date.getMinutes()); // (Method) Returns the minutes of a Date object, using local time.
console.log(date.getSeconds()); // (Method) Returns the seconds of a Date object, using local time.
console.log(date.getMonth() + 1); // (Method) Returns the month, using local time (from 0 to 11 represents for January to December).
console.log(date.getMilliseconds()); // (Method) Returns the milliseconds of a Date, using local time.


console.log("\n");
// Example: Get the next year in the function getNextYear()
function getNextYear() {
     const date = new Date();
     return date.getFullYear() + 1;
};
 
console.log(getNextYear());