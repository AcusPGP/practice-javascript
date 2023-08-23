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
fetch(API.concat('/courses')) // http://localhost:3000/courses
     .then((response) => {
          return response.json();
     })
     .then((data) => {
          console.log(data);
     });