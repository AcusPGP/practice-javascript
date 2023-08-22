// heading 1
const h1Elements = document.querySelectorAll('h1');
console.log(h1Elements);
for (let i = 0; i < h1Elements.length; i++) {
     h1Elements[i].onclick = (e) => {
          console.log(e.target);
     }
}