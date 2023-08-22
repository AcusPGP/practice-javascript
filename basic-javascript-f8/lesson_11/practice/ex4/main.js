const divElements = document.querySelectorAll('div');
console.log(divElements);

divElements.forEach((a) => {
     a.classList.add('box');
})