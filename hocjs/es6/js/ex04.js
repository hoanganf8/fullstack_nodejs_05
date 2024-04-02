//Spread Operator
const aditionalInfo = ["Fullstack", "F8"];
// const users = ["Hoàng An", ...aditionalInfo, "hoangan.web@gmail.com"];

const infomation = {
  teacher: "Hoàng An",
  course: "Fullstack",
};
// const a = ["Item 1", "Item 2"];
// const user = {
//   name: "Hoàng An",
//   ...infomation,
//   email: "hoangan.web@gmail.com",
// };
// console.log(user);

//Lưu ý: Chỉ trải cấp ngoài cùng

//Spread với function
const sum = (a, b) => a + b;
const input = [10, 30];
// const input = { a: 10, b: 20 };
console.log(sum(...input));

//Ứng dụng: Xây dựng Arguments cho các hàm callback, xây dựng kỹ thuật debounce
// setTimeout(
//   function (a, b, c) {
//     console.log("Handle");
//     console.log(a, b, c);
//   },
//   1000,
//   "A",
//   "B",
//   "C"
// );
//clone object, array (shallow)
// const a = ["Item", "Item 2", "Item 3"];
// const b = [...a];
// console.log(b);

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const key = "address";
//Lấy object cũ --> Tạo object mới --> Thêm phần tử mới
// const newObj = { ...user, [key]: "Hà Nội" };
// console.log(newObj);

// const todos = ["Todo 1", "Todo 2"];
// const newTodos = [...todos, "Todo 3"];
// console.log(newTodos);

//Tạo mảng có 100 phần tử, lặp qua từng phần tử trả về index
// [...Array(100).keys()].forEach((key) => {
//   console.log(key);
// });

//Enhance object literal
// const name = "Hoàng An";
// const email = "hoangan.web@gmail.com";
// const age = undefined;
// function getName() {
//   return this.name;
// }
// const user = {
//   name,
//   email,
//   age,
//   getName,
//   getEmail() {
//     return this.email;
//   },
// };
// console.log(user);
// console.log(user.getName());
// console.log(user.getEmail());

//Ví dụ 1: Định nghĩa hàm destructuring ở trên tham số
const addUser = ({ name, email, password }) => {
  //   const name = user.name;
  //   const email = user.email;
  //   const password = user.password;
  console.log(name, email, password);
};

// addUser({
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   password: "123456",
// });

//Ví dụ 2: Destructuring trực tiếp trong callback
const users = [
  {
    id: 1,
    name: "User 1",
  },
  {
    id: 2,
    name: "User 2",
  },
  {
    id: 3,
    name: "User 3",
  },
];
const getUser = (userId) => users.find(({ id }) => id === userId);

// console.log(getUser(1));

//Named Arguments function
const handleRegister = ({ name, email, status = true, note = "" }) => {
  console.log(`Name:`, name);
  console.log(`Email:`, email);
  console.log(`Status:`, status);
  console.log(`Note:`, note);
};

// handleRegister("Hoàng An", "hoangan.web@gmail.com", false, "Hello");
//Bài toán: Thêm các đối số cho: name, email, note

handleRegister({
  note: "Hello",
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
});
