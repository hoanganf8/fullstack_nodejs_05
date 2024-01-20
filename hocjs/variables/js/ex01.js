//Biến trong Javascript
/*
- Lưu trữ dữ liệu tạm thời
- Biến có thể đặt tên
- Biến không cần khai báo kiểu dữ liệu (Trong JS)
Các quy tắc đặt tên trong lập trình (biến, hàm, lớp,...)
1. camelCase
customerId, customerAddressShipping
Đặt tên biến, tên hàm

2. PascalCase
UserInvoice, UserCourse, CustomerController,...
Đặt tên lớp (class), Component trong các Framework

3. underscore
customer_id, user_id, customer_shipping_address
Đặt tên trong database, api response

Kiểu dữ liệu nguyên thủy
- number
- null
- undefined
- string
- boolean: true, false

Kiểu dữ liệu tham chiếu
- object
- function
*/

// var fullname,
//   age = 31,
//   address;
// var username;
// var userEmail;
// "use strict";
var age = 31; //Number
var fullname = "Hoàng An"; //String
var check = true; //Boolean
var address = undefined; //undefined
var lastName = null; //null

//Kỹ thuật nối chuỗi
var courseName = "Fullstack Offline\n";
courseName = courseName + "Hoàng An";
// var welcome = "Chào mừng bạn đến với khóa " + courseName + " tại F8";
var welcome = `Chào mừng bạn đến với khóa ${courseName} tại F8`; //Template String. ` --> Backtick
console.log(welcome);
console.log(courseName);

// var a = "1";
// var b = 2;
// var c = +a + +b;
// console.log(c);

// d = 10;
// console.log(d);

//Kiểm tra kiểu dữ liệu của 1 biến
console.log(typeof age);
console.log(typeof fullname);
console.log(typeof check);
console.log(typeof address);
console.log(lastName === null);
