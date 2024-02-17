//19. forEach(callback) --> Lặp qua từng phần tử mảng và trả về value, index ở callback

var users = ["User 1", "User 2", "User 3", "User 4"];
// users.forEach(function (user, index) {
//   console.log(user, index);
//   if (index === 1) {
//     // user = "User 2 Update";
//     users[index] = "User 2 Update";
//   }
// });
// console.log(users);

//20. map(callback)
/*
- Duyệt qua các phần tử của mảng ban đầu
- Trả về 1 mảng mới
- Giá trị các phần tử của mảng mới phụ thuộc vào giá trị trả về của callback (return)
- Số lượng phần tử của mảng mới = số lượng phần tử của mảng ban đầu
*/
// var newArr = users.map(function (user, index) {
//   console.log(user);
//   return `<h3>${user}</h3>`;
// });
// console.log(newArr);

//21. filter(callback)
/*
- Duyệt qua các phần tử của mảng ban đầu
- Trả về 1 mảng mới
- Giá trị phần tử mảng mới là các phần tử của mảng ban đầu nếu callback trả về true
*/
// var newArr = users.filter(function (user, index) {
//   console.log(user);
//   if (user === "User 2") {
//     return true;
//   }
// });
// console.log(newArr);

var customers = [
  "Tạ Hoàng An",
  "Lưu Anh Quân",
  "Đặng Ngọc Sơn",
  "Trần Công Lực",
  "Nhật Dương",
];
// console.log(customers);
//Yêu cầu: Trả về 1 mảng mới chứa họ và tên của các khách hàng có chứa từ khóa: "an" (Không phân biệt hoa, thường)
// var keyword = "an";
// var newArr = customers.filter(function (customer) {
//   return customer.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(newArr);

//Yêu cầu: Xóa khách hàng có tên: "Đặng Ngọc Sơn"
var keyword = "Đặng Ngọc Sơn";
customers = customers.filter(function (customer) {
  return customer !== keyword;
});
// console.log(customers);

var fullname = "tạ hoàng an";
//Yêu cầu: Chuyển thành tên viết chuẩn: Tạ Hoàng An
// var result = fullname
//   .split(" ")
//   .map(function (word) {
//     var newWord = word.slice(0, 1).toUpperCase() + word.slice(1);
//     return newWord;
//   })
//   .join(" ");
// console.log(result);

//22. some(callback)
/*
- Duyệt qua từng phần tử trong mảng
- Trả về true / false
- Trả về true nếu 1 phần tử trả về true
*/

//Ví dụ: Kiểm tra mảng numbers có số chẵn hay không?
var numbers = [1, 3, 5, 8, 11];
var result = numbers.some(function (number) {
  console.log(number);
  return number % 2 === 0;
});
console.log(result);

//23. every(callback)
/*
- Duyệt qua từng phần tử trong mảng
- Trả về true / false
- Trả về true nếu tất cả các phần tử trả về true
- Vòng lặp sẽ dừng khi có 1 phần tử không trả về true
*/
//Ví dụ: Kiểm tra mảng numbers có phải mảng số lẻ không?
var numbers = [1, 3, 2, 5, 7, 11];
var result = numbers.every(function (number) {
  console.log(number);
  return number % 2 !== 0;
});
console.log(result);

/*
- find()
- findLast()
- findIndex()
- findLastIndex()
- reduce()
*/
