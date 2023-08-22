// DOM events
// 1. Input / Select
// 2. Key up - down

const inputElement1 = document.querySelector('input[type="text"]');
console.log(inputElement1);

inputElement1.onchange = (e) => {
     console.log(e.target.value);
}

// inputElement1.onkeydown = (e) => {
//      console.log(e);
// }

// inputElement1.onkeyup = (e) => {
//      console.log(e);
// }

// e.which = return the ASCII code of the keyboard button
// document.onkeypress = function(e) {
//      switch(e.which) {
//           // code
//      }
// }

const inputElement2 = document.querySelector('input[type="checkbox"]')
console.log(inputElement2);

inputElement2.onchange = (e) => {
     console.log(e.target.checked);
}

const selectElement = document.querySelector('select');
console.log(selectElement);

selectElement.onchange = (e) => {
     console.log(e.target.value);
}