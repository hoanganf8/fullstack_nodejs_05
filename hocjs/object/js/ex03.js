Object.prototype.getMessage = function () {
  return "Hello F8";
};
Object.prototype.message = "Học lập trình không khó";

var user = {
  name: "Hoàng An",
  company: "F8",
};
console.log(user.getMessage());
console.log(user.message);

var customer = {
  name: "Lưu Anh Quân",
  email: "quan@gmail.com",
  age: 25,
};
console.log(customer.getMessage());
console.log(user.message);

//Bài tập: Viết phương thức prototype có tác dụng nối tất cả giá trị các value trong object thành 1 mảng
// Đặt tên phương thức: combineValues()
Object.prototype.combineValues = function () {
  //
  //   console.log(this);
  //   var result = [];
  //   var arr = this;
  //   Object.keys(this).forEach(function (key) {
  //     result.push(arr[key]);
  //   });
  //   return result;
  return Object.values(this);
};
console.log(customer.combineValues());
String.prototype.show = function () {
  return "Hoàng An";
};
var fullname = "Hoàng An"; //String
console.log(fullname.show());
// console.log(String.prototype);
// console.log(fullname.message);

var age = 32; //Number
console.log(age.show());
// console.log(Number.prototype);
// console.log(age.message);

// var check = true; //Boolean
// console.log(Boolean.prototype);
// console.log(check.message);

// var users = []; //Array
// console.log(Array.prototype);
// console.log(users.message);

// function demo() {
//   console.log(arguments);
//   console.log(arguments.message);
// }
// demo(1, 2, 3);
