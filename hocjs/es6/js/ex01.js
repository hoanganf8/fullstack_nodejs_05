//Biến: let, const
//Scope

let a = 10;
a = 20;
// if (a >= 10) {
//   let b = 20;
//   //   console.log(b);
//   for (let i = 1; i <= 5; i++) {
//     if (i === 5) {
//       let b = 30;
//     }
//   }
//   console.log(b);
// }
// console.log(b);

// const b = 10; //Hằng số
// b = 20;

const c = 10;
const user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
user.name = "Hoàng An F8";
// user = {}; //Lỗi
console.log(user);

var getMessage = function () {
  console.log("Học lập trình không khó");
};
getMessage();

var getMessage = function () {};
// console.log(getMessage());

//Lưu ý: let, const không có hoisting
//Tính năng của JS cho phép đẩy phần khai báo lên trước phần thực thi

// fullname = "Hoàng An";
// console.log(fullname);
// let fullname;
const something = function () {
  console.log("Hello anh em F8");
};

something();
