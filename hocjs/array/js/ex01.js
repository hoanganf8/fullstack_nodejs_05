/*
Mảng (Array): 
- Kiểu dữ liệu tham chiếu
- Tập hợp nhiều giá trị trong 1 biến
- Mảng bản chất là object (1 dạng của object)
- 2 phần: 
+ Element: Giá trị của 1 phần tử trong mảng
+ Index: Chỉ số để truy cập vào phần tử trong mảng (Bắt đầu từ 0)

Có 2 loại mảng: 
- Mảng 1 chiều
- Mảng đa chiều

Hàm tạo của mảng là: Array
*/
console.log(Array.prototype);
var users = ["Đặng Ngọc Sơn", "Tạ Hoàng An", "Lưu Anh Quân"];
// console.log(users, typeof users);

//Truy cập vào phần tử mảng: Xác định index
// console.log(users[0]);
// console.log(users[2]);

//Thay đổi giá trị phần tử
users[0] = "Sơn F8";

//Lấy số lượng phần tử trong mảng
console.log(users.length);

//Thêm phần tử mới vào cuối mảng
users[users.length] = "Nguyễn Mạnh Huy";
users[users.length] = "Văn Tuấn";
// users[-1] = "Vĩ";
// users["a"] = "Tuấn";
// users["-1"] = "Tuấn 1";

//Duyệt mảng: for
// for (var index = 0; index < users.length; index++) {
//   console.log(users[index]);
// }

//Duyệt mảng: for in --> Trả về index và key
// for (var key in users) {
//   console.log(key, users[key]);
// }

//Duyệt mảng: for of --> Trả về element
// for (var user of users) {
//   console.log(user);
// }

/*
Lưu ý: Vòng lặp for in sẽ lấy được cả index và key
*/

console.log(users);
//Xóa phần tử trong mảng
var result = [];
var count = 0;
for (var index in users) {
  if (index !== "2") {
    result[count] = users[count];
    count++;
  }
}

console.log(result);
// for (var value of result) {
//   console.log(value);
// }
// console.log(result[2]);

//Bài tập: Chèn 1 phần tử vào đầu mảng
var newValue = "F8";
var result = [newValue];
for (var user of users) {
  result[result.length] = user;
}
console.log(result);
