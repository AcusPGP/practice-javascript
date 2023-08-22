// DOM attributes

var headingElement = document.querySelector("h1");
headingElement.title = "Heading";
// headingElement.id="Heading";
// headingElement.className="Heading";
// headingElement.setAttribute("href", "Heading");

console.log(headingElement);

// get the value of the attributes
console.log(headingElement.className);
console.log(headingElement.getAttribute("class"));
console.log(headingElement.getAttribute("title"));
