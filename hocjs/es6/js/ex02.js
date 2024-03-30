//Arrow function

//Arrow function không có tham số
const getMessage = () => {
  console.log("Hello anh em F8");
};
getMessage();

//Arrow function có 1 tham số
const getMsg = (msg) => {
  console.log(msg);
};
getMsg("F8");

//Arrow function có nhiều tham số
const getTotal = (a, b) => {
  const total = a + b;
  console.log(total);
};
getTotal(10, 20);

//Arrow function có return
const sum = (a, b) => a + b;
console.log(sum(10, 20));

// const getUser = (name, email) => ({ name: name, email: email });
// console.log(getUser("Hoàng An", "hoangan.web@gmail.com"));

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
const getUser = (id) => users.find((user) => user.id === id);
console.log(getUser(1));

document.body.innerHTML = `${users
  .map((user) => `<h2>${user.name}</h2>`)
  .join("")}`;

//Tính tổng sử dụng reduce
var arr = [1, 5, 2, 8];
var result = arr.reduce((prev, current) => prev + current, 0);
console.log(result);

//Arrow function trong object
const customer = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  showResult: function () {
    return {
      age: 30,
      getAge: () => {
        console.log(this);
        return this.age;
      },
      getEmail: () => {
        return this.email;
      },
    };
  },
};
console.log(customer.showResult().getEmail());

const hello = (...args) => {
  console.log(args);
};
hello(10, 20, 30);

// const User = () => {
//   this.name = "Hoàng An";
//   this.email = "hoangan.web@gmail.com";
// };
// const obj = new User();
// console.log(obj);

//Arrow trong IIFE
(() => {
  console.log("Hello");
})();
