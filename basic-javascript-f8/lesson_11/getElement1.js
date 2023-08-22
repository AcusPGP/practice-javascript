// HTML DOM = Document Object Model
/**
 * 3 main parts: 
 * elements: ID, Class, Tag, CSS selector, HTML collection
 * attributes
 * texts
 */

// JavaScript: Browser | Server (NodeJS)
// Browser: HTML -> DOM -> WEB API

// document.write("Hello");a

// HTML elements =/= HTML collections
// Get element methods
/**
 * 1. getElementById
 * 2. getElementsByClassName
 * 3. getElementsByTagName
 * 4. querySelector
 * 5. querySelectorAll
 */
var headingNode = document.getElementById("heading"); // by class name of an element
console.log(headingNode); // object
console.log({
     element: headingNode
});

var classNames = document.getElementsByClassName("classname"); // by class names 
console.log(classNames);

var tags = document.getElementsByTagName("h1"); // by tag elements
console.log(tags);

var headingQuery = document.querySelector("h1");
console.log(headingQuery);

console.log(document.querySelector(".box .heading-2")); // or: html .box .heading-2 -> default first element
console.log(document.querySelector(".box .heading-2:first-child")); // first element
console.log(document.querySelector(".box .heading-2:nth-child(2)")); // second element
console.log(document.querySelector(".box .heading-2:nth-child(3)")); // third element

console.log(document.querySelectorAll(".box .heading-2")); // get all elements

console.log(document.forms);
console.log(document.forms["form-1"]);

console.log(document.anchors["youtube"]);