let users = [
     {
          id: 1,
          name: 'Acus'

     },
     {
          id: 2,
          name: 'Phuc'
     },
     {
          id: 3,
          name: 'Han'
     }
];

var comments = [
     {
          id: 1, 
          user_id: 1,
          content: 'Hello!'
     },
     {
          id: 2,
          user_id: 2,
          content: 'Hi there!'
     },
     {
          id: 3, 
          user_id: 1,
          content: 'Thank you!'
     }
]

// 1. Lấy comments
// 2. Từ comments lấy ra user_id tương ứng
// 3. Từ user_id lấy ra user tương ứng

// Fake API

function getComments() {
     return new Promise((resolve) => {
          setTimeout((resolve(comments)), 1000)
     })
}

function getUserByIds(user_ids) {
     return new Promise((resolve) => {
          let results = users.filter((user) => {
               return user_ids.includes(user.id)
          })
          resolve(results);
     })
}

getComments()
     .then((comments) => {
          let user_ids = comments.map((comment) => {
               return comment.user_id
          })
          return getUserByIds(user_ids)
               .then((users) => {
                    return {
                         users: users,
                         comments: comments
                    };
               });
     })
     .then((data) => {
          const ulElement = document.getElementById('comment-block');

          let html = '';
          data.comments.forEach((comment) => {
               let user = data.users.find((user) => {
                    return user.id === comment.user_id
               });
               html += `<li>${user.name}: ${comment.content}</li>`
          });

          ulElement.innerHTML += html;
     });