//Destructuring: Phá vỡ cấu trúc của object, array để lưu các giá trị key thành các biến riêng biệt

const user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 31,
  address: "Hà Nội",
  "shipping-address": "Hồ Chí Minh",
  a: {
    value: "F8",
  },
};
// const name = user.name;
// const email = user.email;
// const {
//   name: username,
//   email,
//   age = 30,
//   "shipping-address": shippingAddress,
// } = user;
// console.log(username, email);
// console.log(age);
// console.log(shippingAddress);
// console.log(user["shipping-address"]);

// const {
//   name,
//   email,
//   a: { value },
//   ...rest
// } = user;
// console.log(name, email);
// const { value } = a;
// console.log(value);

const users = ["Hoàng An", "hoangan.web@gmail.com", 32, "Hà Nội"];
// const [name, email, age, address] = users;
// console.log(name, email, age, address);

// const [name, , age] = users;
// console.log(name);
// console.log(age);

const [name, ...rest] = users;
console.log(name);
console.log(rest);

const data = {
  displayName: "Hoàng An",
  emails: [{ value: "hoangan.web@gmail.com" }],
};
console.log(data);
const {
  displayName,
  emails: [{ value: email }],
} = data;
console.log(displayName, email);
