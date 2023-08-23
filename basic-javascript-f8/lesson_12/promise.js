// Sync = xử lí đồng bộ Z (chạy tuần tự) -> respones and request model (server and client)
// Async = xử lí bất đồng bộ (chạy đồng thời): setTimeOut, setInterval, fetch, XMLHttpRequest, file reading,
// request animation frame (Callback) -> fire and forget model (server and client)

// Why need to use promise keyword? Because -> Promise được sinh ra để xử lí các thao tác bất đồng bộ, ex: lấy API từ một page của website
// 1. Trước khi có Promise thì ta sử dụng Callback -> gây ra Callback hell
// 2. Pyramid of doom

// setInterval(() => {
//      let i = 0;
//      console.log(i++);
// }, 1000);

/**
 * 3 stages:
 * 1. pending
 * 2. fullfilled
 * 3. rejected
 */
// let promise = new Promise(
//      // Executor
//      function(resolve, reject) {
//           // Logic
//           // Thành công -> resolve()
//           // Thất bại -> reject()

//           // resolve();
//           // reject();
//      }
// );

// promise
//      .then(function() {
//           // when resolve() is called
//           console.log(
//                'sucessfully!'
//           );
//      })
//      .catch(function() {
//           // when reject() is called
//           console.log(
//                'unsucessfully!'
//           );
//      })
//      .finally(function() {
//           // is always called
//           console.log(
//                'finally!'
//           );
//      });

/**
 * Promise chain
 */

// let promise = new Promise((resolve, reject) => {
//      resolve();
// });

// Promise 1
// promise
//      .then(() => {
//           return 1;
//      })
//      .then((num) => {
//           console.log(num);
//      })
//      .finally(() => {
//           console.log("Succeed!");
//      })

// Promise 2
// promise
//      .then(() => {
//           return new Promise((resolve) => {
//                setTimeout(resolve([1,2,3]), 1000);
//           });
//      })
//      .then((data) => {
//           console.log(data);
//      })
//      .finally(() => {
//           console.log("Succeed!");
//      })

// Promise 3
// function sleep(ms) {
//      return new Promise((resolve) => {
//           setTimeout(resolve, ms)
//      });
// }

// sleep(1000)
//      .then(() => {
//           console.log(1);
//           return sleep(1000);
//      })
//      .then(() => {
//           console.log(2);
//           return sleep(1000);
//      })  
      
/**
 * 1. Promise.resolve
 * 2. Promise.reject
 * 3. Promise.all
 */
