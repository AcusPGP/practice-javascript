// JSON Server Library -> API Server

/**
 * 1. JSON Server OR Mock API
 * 2. CRUD:
 *   - create: tạo mới dữ liệu -> POST
 *   - read: lấy dữ liệu -> GET
 *   - udpate: chỉnh sửa dữ liệu -> PUT/PATCH
 *   - delete: xoá dữ liệu -> DELETE
 * 3. Postman: API tester
 */

// JSON Server API
const API = 'http://localhost:3000'
const courses_API = API.concat('/courses');

// Functions
function start() {
     getCourses(renderCourses);
     handleCreateForm();
}

function getCourses(callback) {
     fetch(courses_API) // http://localhost:3000/courses
     .then((response) => {
          return response.json();
     })
     .then(callback)
}

function createCourses(data, callback) {
     const contents = {
          method: 'POST',
          headers: {
               "Content-Type": "application/json"
               // 'Content-Type': 'application/x-www-form-urlencoded'
             },
          body: JSON.stringify(data)
     }
     fetch(courses_API, contents)
          .then((response) => {
               return response.json();
          })
          .then(callback);
}

function renderCourses(courses) {
     const listCoursesBlock = document.querySelector('#list-courses')
     let hmtls = courses.map((course) => {
          return `<li class="course-item-${course.id}">
               <h4>${course.name}</h4>
               <p>${course.description}</p>
               <button onclick="handleDeleteCourse(${course.id})">Delete</button>
               <button onclick="handleUpdateCourse(${course.id})">Udpate</button>
          </li>`;
     }).join('');
     listCoursesBlock.innerHTML = hmtls;
}

function handleCreateForm() {
     const createBtn = document.querySelector('#create');
     createBtn.onclick = () => {
          const name = document.querySelector('input[name="name"]').value;
          const description = document.querySelector('input[name="description"]').value;
          if (name && description) {
               const form = {
                    name: name,
                    description: description
               }
               createCourses(form, getCourses(renderCourses))
          } else {
               alert('Data is missing!');
          }
     }
}
function handleDeleteCourse(id) {
     const contents = {
          method: 'DELETE',
          headers: {
               "Content-Type": "application/json"
               // 'Content-Type': 'application/x-www-form-urlencoded'
             }
     }
     fetch(courses_API.concat(`/${id}`), contents)
          .then((response) => {
               return response.json();
          })
          .then(() => {
               const deleteItem = document.querySelector(`.course-item-${id}`);
               if (deleteItem) {
                    deleteItem.remove();
               }
          });
}

function handleUpdateCourse(id) {
     fetch(courses_API.concat(`/${id}`))
          .then((response) => {
               return response.json();
          })
          .then((data) => {
               document.querySelector('input[name="name"]').value = data.name;
               document.querySelector('input[name="description"]').value = data.description;

               const createBtn = document.querySelector('#create');
               const saveBtn = document.querySelector('#save');

               createBtn.style.display = "none";
               saveBtn.style.display = "block";

               saveBtn.onclick = () => {
                    const name = document.querySelector('input[name="name"]').value;
                    const description = document.querySelector('input[name="description"]').value;
                    if (name && description) {
                         const form = {
                              name: name,
                              description: description
                         }

                         const content = {
                              method: 'PUT',
                              headers: {
                                   "Content-Type": "application/json"
                              },
                              body: JSON.stringify(form)
                         }

                         fetch(courses_API.concat(`/${id}`), content)
                              .then((response) => {
                                   return response.json();
                              }).then(getCourses(renderCourses));
                    } else {
                         alert('Data is missing!');
                    }

                    createBtn.style.display = "block";
                    saveBtn.style.display = "none";
               }
          })
}

start();