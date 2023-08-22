const boxElement = document.querySelector('.box');
console.log(boxElement.classList);

// ClassList properties: add, contains, remove, toggle, value, replace

// value
console.log(boxElement.classList.value);
console.log(boxElement.classList[0]);
console.log(boxElement.classList[1]);

// add: add a class to an element
boxElement.classList.add('red', 'blue', 'green')

// contains: check if the element has the class's name
console.log(boxElement.classList.contains('red'));

// remove: remove a class from an element
boxElement.classList.remove('blue');

// setTimeout(() => {
//      boxElement.classList.remove('red');
// }, 5000)

// toggle: check if the element has the class's name. If true, remove that name. If false, add that name
setInterval(() => {
     boxElement.classList.toggle('red');
}, 1000)

// replace
boxElement.classList.replace('green', 'black');