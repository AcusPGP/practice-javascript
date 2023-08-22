const divElement = document.querySelector('.box');
console.log(divElement.style)

// divElement.style.width = '100px';
// divElement.style.height = '100px';
// divElement.style.backgroundColor = 'red';

Object.assign(divElement.style, {
     width:'100px',
     height:'100px',
     backgroundColor: 'green'
});

console.log(divElement.style.backgroundColor);