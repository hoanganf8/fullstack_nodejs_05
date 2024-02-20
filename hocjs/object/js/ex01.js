//Object: Đối tượng
/*
- Thuộc tính (Biến): Đặc điểm
- Phương thức (Hàm): Hành động

Cách tạo đối tượng trong JS
- Object Literal --> Tạo từ hàm Object
- Function Constructor
- Class (ES6)
*/
console.log([Object]);
var user = {}; //user = new Object()
// console.log(user, typeof user);

// Kiểm tra 1 biến có phải object không?
if (typeof user === "object" && !Array.isArray(user) && user !== null) {
  console.log("Là object");
}

/*
Cấu tạo của object: 
{
    key1: value1,
    key2: value2,
    key3: value3,
    keyn: valuen,
}
*/

//Khai báo
var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  address: "Tây Mỗ - Hà Nội",
  getAge: function () {
    return 32;
  },
};

//Thêm key vào object
user.course = "Fullstack";
user["shipping"] = "Hà Nội";

//Sửa giá trị của key trong object
user.name = "Hoàng An F8";

//Xóa key trong object
delete user.address;

//Computed Property
var key = "history";
user[key] = [1, 2, 3];
// console.log(user);

//Truy cập vào key của object: tenobject.tenkey
// console.log(user.name);
// console.log(user.email);
// console.log(user.getAge());
// console.log(user["address"]);

//Duyệt các key trong object
// for (var key in user) {
//   if (typeof user[key] === "function") {
//     console.log(user[key]());
//   } else {
//     console.log(user[key]);
//   }
// }

//Lấy danh sách key trong Object --> Trả về mảng
// var keys = Object.keys(user);
// console.log(keys);

// var error = {};
// //Kiểm tra object error có dữ liệu không?
// if (Object.keys(error).length) {
//   console.log("Có dữ liệu");
// } else {
//   console.log("Không có dữ liệu");
// }

//Lấy danh sách value trong Object --> Trả về mảng
// var values = Object.values(user);
// console.log(values);

//Lấy danh sách key và value trong Object --> Trả về mảng 2 chiều
var result = Object.entries(user);
// console.log(result);

//Chuyển mảng 2 chiều thành object
var result2 = Object.fromEntries(result);
// console.log(result2);

//Nối object
var user2 = {
  job: "Giảng viên",
  company: "F8",
};
var tmp = Object.assign({}, user);
var user3 = Object.assign(tmp, user2);
// console.log(user3);
// console.log(user);

var users = [
  {
    id: 1,
    name: "User 1",
    email: "user1@gmail.com",
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@gmail.com",
  },
];
console.log(users);
