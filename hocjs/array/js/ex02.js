console.log(Array.prototype);
console.log([Array]);

// var users = ["An", "Sơn", "Dương"];
//Phương static trong array
//1. Array.isArray() --> Kiểm tra 1 biến có phải là mảng hay không?
// console.log(Array.isArray(users));

//2. Array.from() --> Chuyển kiểu dữ liệu khác về mảng (Ép kiểu)
// function test() {
//   var data = Array.from(arguments);
//   //   var data = arguments;
//   console.log(Array.isArray(data));
// }
// test(5, 10, 15, 20);

//Phương thức non-static --> Phụ thuộc vào đối tượng: tenobject.tenphuongthuc()
var users = ["An", "Sơn", "Dương", "Sơn"];
console.log(users);

//3. length --> Lấy số lượng phần tử trong mảng
// console.log(users.length);

//4. concat() --> Nối các mảng thành 1 mảng
// var newArr = users.concat(["a", "b", "c"], [1, 2, 3, 4], [5, 6, 7, 8]);
// console.log(newArr);
// var newArr = users.concat("Quân");
// console.log(newArr);

//5. fill() --> Thay thế tất cả các phần tử mảng thành 1 giá trị
// var result = users.fill(1);
// console.log(users);
// console.log(result);

//6. includes() --> Tìm 1 phần tử trong mảng theo value --> Trả về true/false
// console.log(users.includes("Dương"));

//7. indexOf() --> Tìm 1 phần tử trong mảng theo value --> Trả về index
// console.log(users.indexOf("Sơn"));

//8. lastIndexOf() --> Tìm 1 phần tử cuối cùng trong mảng theo value --> Trả về index
// console.log(users.lastIndexOf("Sơn"));

//9. join() --> Nối các phần tử trong mảng thành chuỗi
// console.log(users.join("-"));

//10. push() --> Thêm phần tử vào cuối mảng (Thay đổi mảng ban đầu)
// var count = users.push(["Tâm"], {});
// console.log(users, count);

//11. unshift() --> Thêm phần tử vào đầu mảng
// var count = users.unshift("Tâm", "Văn");
// console.log(users, count);

//12. pop() --> Xóa phần tử cuối mảng
// var value = users.pop();
// console.log(users);
// console.log(value);

//13. shift() --> Xóa phần tử đầu mảng
// var value = users.shift();
// console.log(users);
// console.log(value);

//14. splice() --> Xóa phần tử tại index
// var value = users.splice(1, 2, "Item 1", "Item 2", "Item 3");
// console.log(users);
// console.log(value);

//15. slice(start, end) --> Cắt mảng từ index đến end-1
// var newArr = users.slice(1, 3);
// var newArr = users.slice(1);
// var newArr = users.slice(-1);
// console.log(newArr);

//16. keys() --> Lấy danh sách các key trả về 1 mảng
// var newArr = Array.from(users.keys());
// console.log(newArr);

//Tips 01: Khởi tạo 1 mảng chứa 100 phần tử bắt đầu từ 0: 0,1,2,3,...99
// var range = Array.from(Array(100).keys());
// console.log(range);

//Tips 02: Lấy giới hạn số lượng phần tử trong mảng ban đầu
// var arr = ["A", "B", "C", "D", 1, 2, 3, 4, 5, 6];
// arr.length = 5;
// console.log(arr);

//17. sort() --> Sắp xếp mảng theo thứ tự tăng dần
// users.sort();
// console.log(users);

var numbers = [1, 100, 2, 5, 9];
numbers.sort(function (a, b) {
  //a: phần tử sau
  //b: phần tử trước
  //Nếu hàm trả về giá trị âm --> Đổi chỗ a,b
  //   console.log(`a = ${a}, b = ${b}`);
  //   if (a < b) {
  //     return -1;
  //   }
  return a - b;
});
// console.log(numbers);

var customers = [
  "Tạ Hoàng An",
  "Lưu Anh Quân",
  "Đặng Ngọc Sơn",
  "Trần Công Lực",
  "Nhật Dương",
];

//Yêu cầu: Sắp xếp mảng customers theo thứ tự tăng dần theo tên (Dùng sort())

function getFirstName(fullname) {
  return fullname.split(" ").slice(-1).join().toLowerCase();
}
customers.sort(function (a, b) {
  if (getFirstName(a) < getFirstName(b)) {
    return -1;
  }
});
console.log(customers);

//18. reverse() --> Đảo ngược mảng
users.reverse();
console.log(users);
