// Fetch
// API = Application Programming Interface

const API = 'https://jsonplaceholder.typicode.com/posts';
// stream
fetch(API)
     .then((response) => {
          return response.json(); // JSON.parse(): JSON -> JavaScript
     })
     .then((posts) => {
          let htmls = posts.map((post) => {
               return `<li>
                    <h2>${post.title}</h2>
                    <p>A${post.body}</p>
               </li>`
          }).join('');
          document.getElementById('post-block').innerHTML = htmls;
     })
     .catch((error) => {
          console.log(error);
     })