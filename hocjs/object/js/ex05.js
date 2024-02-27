// //Object.create() --> Tạo object từ 1 prototype

// // var user = {};
// var user = Object.create(null);
// Object.assign(user, { name: "Hoàng An", email: "hoangan.web@gmail.com" });
// console.log(user);

// var elements = Object.create(HTMLElement.prototype);
// console.log(elements);

//Tham chiếu
// var user = { name: "Hoàng An", email: "hoangan.web@gmail.com" };
// // var customer = user;
// // var customer = Object.assign({}, user); //Shallow Copy
// // var customer = { ...user }; //Shallow Copy
// var customer = JSON.parse(JSON.stringify(user)); //Deep Copy
// customer.name = "Hoàng An F8";
// console.log(user);
// console.log(customer);

// var getA = function () {
//   console.log(1);
// };
// var getB = getA;
// var getC = getB;
// getC();

//Không so sánh được trong kiểu dữ liệu tham chiếu
// var a = { name: "Hoàng An" };
// var b = { name: "Hoàng An" };
// console.log(JSON.stringify(a));
// console.log(JSON.stringify(a) === JSON.stringify(b));

var getMessage = function (msg) {
  msg.name = "Hoàng An";
};

var data = { name: "F8" };
getMessage(data); //msg = data; msg.name = 'Hoàng An';
console.log(data);
