var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
     const ul = document.querySelector("ul");
     
     // Solution 1
     // let temp = [];
     // for (let index in courses) {
     //      temp[index] = `<li>${courses[index]}</li>`
     // }
     // console.log(temp);
     // return ul.innerHTML = temp.join(" ");

     // Solution 2
     // for (let index in courses) {
     //      ul.innerHTML += `<li>${courses[index]}</li>`;
     // }

     // Solution 3
     // let temp = [];
     // for (let item of courses) {
     //      temp.push(`<l1>${item}</l1>`);
     // }
     // return ul.innerHTML = temp.join(" ");
}

render(courses);