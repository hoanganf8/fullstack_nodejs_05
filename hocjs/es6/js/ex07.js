//Làm sao Javascript chạy được?
/*
Javascript Engine (Chrome V8)
Javascript Runtime: Môi trường chạy được Javascript
- Browser APIs (Web APIs) --> Trình duyệt (Xây dựng sẵn các hàm: setTimeout, setInterval, fetch,...)
- Node

Cụ thể: 
- Nếu JS chạy trên trình duyệt: Web APIs bọc V8
- Nếu JS chạy trên Server: C++ bọc V8

JS là single-thread (Đơn luồng): Tại 1 thời điểm chỉ chạy 1 tác vụ

Cấu tạo của JS Engine
- HEAP: Bộ nhớ
- Call Stack: Nơi chứa các tác vụ cần gọi (Tại 1 thời điểm chỉ có 1 tác vụ)

Bất đồng bộ (asynchronous): Các hàm được xây dựng bởi Javascript Runtime
- setTimeout()
- fetch()
- setInterval()
- Event: click, mouseup, mousedown,...
Đặc điểm chung: Đều có callback
*/

// alert("K5");
// console.log("Hello anh em F8");

// console.log(1);
// console.log(2);
// alert(1);
// setTimeout(() => {
//   console.log(3);
// }, 3000);
// console.log(4);

// setTimeout(() => {
//   console.log("Học lập trình không khó");
// }, 0);
// console.log("Hello anh em F8");

//Xử lý bất đồng bộ
/*
Công việc: Cho thành đồng bộ

1. Callback

2. Promise

3. Async Await
*/

// const getUsers = (callback) => {
//   setTimeout(() => {
//     console.log("User Data");
//     typeof callback === "function" && callback();
//   }, 1000);
// };
// const showMessage = (callback) => {
//   setTimeout(() => {
//     console.log("Hiển thị thành công");
//     typeof callback === "function" && callback();
//   }, 0);
// };
// const displayUser = () => {
//   console.log("Display User");
// };
// getUsers(() => {
//   showMessage(() => {
//     displayUser();
//   });
// });

//Giải pháp: Chuyển từ dạng nested callback --> chaining
//method1().method2().method3()

//Promise: Object đặc biệt dùng để xử lý các tác vụ bất đồng bộ
//3 trạng thái:
// - pending
// - fulfilled
// - reject

// const myPromise = new Promise((resolve, reject) => {
//   //resolve: Hàm để trả về dữ liệu thành công
//   //reject: Hàm để trả về dữ liệu thất bại
//   //Lưu ý: Việc tác vụ đó thành công hay không là do logic nghiệp vụ, còn promise chỉ có tác dụng là trả về
//   setTimeout(() => {
//     reject("Error");
//     resolve("User Data");
//   }, 1000);
// });

//Đọc dữ liệu của promise
//Then hoặc Catch --> Finally
// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Xong rồi");
//   });

const getUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("User Data");
      reject("User Error");
    }, 1000);
  });
};
const showMessage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Hiển thị thành công");
      reject("Error Message");
    }, 0);
  });
};
const displayUser = () => {
  return new Promise((resolve, reject) => {
    resolve("Display User");
  });
};
// getUsers().then((users) => {
//   console.log(users);
//   showMessage().then((message) => {
//     console.log(message);
//     displayUser().then((user) => {
//       console.log(user);
//     });
//   });
// });
// getUsers()
//   .then((users) => {
//     console.log(users);
//     return showMessage();
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Xong Promise 1");
//   })
//   .then((message) => {
//     console.log(message);
//     return displayUser();
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Xong Promise 2");
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Xong Promise 3");
//   });

// const todoPromise = fetch("https://jsonplaceholder.typicode.com/todos");

// todoPromise
//   .then((response) => {
//     //Muốn đọc dữ liệu từ fetch, gọi hàm response.json() --> Promise
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const users = [
  {
    id: 1,
    name: "User 1",
    salary: 5000,
  },
  {
    id: 2,
    name: "User 2",
    salary: 6000,
  },
  {
    id: 3,
    name: "User 3",
    salary: 7000,
  },
  {
    id: 4,
    name: "User 4",
    salary: 8000,
  },
];
const getUser = (userId) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find(({ id }) => id === userId);
      resolve(user);
    }, 1000);
  });
const arr = [1, 3, 4];

//Yêu cầu: Tính tổng thu nhập các user trong mảng arr
//Không dùng: async await, Promise.all
// const getSalary = () => {
//   //Trả về 1 promise chứa tổng tiền
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const userId = arr[i];
//     const isLast = i === arr.length - 1;
//     const userPromise = getUser(userId).then(({ salary }) => {
//       total += salary;
//       if (isLast) {
//         //Tạo promise chứa tổng tiền
//         return new Promise((resolve) => resolve(total));
//       }
//     });
//     if (isLast) {
//       return userPromise;
//     }
//   }
// };
// getSalary().then((total) => {
//   console.log(total);
// });
//Ví dụ: Gửi email hàng loạt, lấy danh sách users github,...
//Bài toán: Xử lý nhiều Promise cùng 1 lúc
// --> Giải pháp: Promise.all()

//Promise.all(): Triển khai qua 2 bước
/*
- Bước 1: Tạo 1 mảng chứa tất cả các Promise cần Resolve
- Bước 2: Đưa mảng chứa các Promise vào Promise.all() để xử lý
*/

// const promises = arr.map((userId) => getUser(userId));
// console.log(promises);
// Promise.all(promises).then((users) => {
//   console.log(users);
//   const result = users.reduce((total, { salary }) => {
//     return total + salary;
//   }, 0);
//   console.log(result);
// });

// Promise.all(arr.map((userId) => getUser(userId))).then((users) => {
//   const result = users.reduce((total, user) => {
//     return total + user.salary;
//   }, 0);
//   console.log(result);
// });

// const a = 10;
// const getA = () => {
//   return Promise.resolve(a);
//   //   return Promise.reject("Error");
// };
// setTimeout(() => {
//   console.log("Timeout");
// }, 0);
// getA().then((data) => {
//   console.log(data);
// });
// console.log("A");
