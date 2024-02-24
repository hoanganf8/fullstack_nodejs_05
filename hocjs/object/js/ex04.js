//Function Constructor
/*
Tên hàm: 
- Danh từ
- Sử dụng quy tắc PascalCase: User, UserController,...

Phương thức static, thuộc tính static
(Định nghĩa qua tên hàm tạo: TenHamTao.tenthuoctinh, TenHamTao.tenphuongthuc())
- Truy cập trực tiếp từ tên hàm tạo
- Không bị phụ thuộc bởi đối tượng
- Từ khóa this trong phương thức static sẽ là nội dung của hàm tạo

Phương thức non-static, thuộc tính non-static
(Phương thức, thuộc tính được định nghĩa trong hàm tạo hoặc thông qua prototype)
- Bắt buộc phải gọi qua đối tượng (Được khởi tạo từ hàm tạo)
- Bị phụ thuộc bởi đối tượng
User
    - user
    - customer
- Từ khóa this trong phương thức non-static sẽ trả về đối tượng    
*/
function User(name, email) {
  //Định nghĩa thuộc tính
  this.name = name;
  this.email = email;
  //Định nghĩa phương thức
  this.showInfo = function () {
    return `${this.name} - ${this.email}`;
  };
}

//Prototype
User.prototype.message = "Hello F8"; //non-static
User.prototype.getName = function () {
  //this ở trong phương thức thông thường (non-static) --> Object
  console.log(this);
  return this.name;
};

//Static method, static property
// User.email = "hoangan.web@gmail.com";
User.getEmail = function () {
  //Khởi tạo object
  var user = new this();
  //   console.log(user, typeof user);
  console.log(user.message);
  //this ở trong phương thức tĩnh --> Nội dung của hàm tạo
  return "hoangan.web@gmail.com";
};

//Khởi tạo đối tượng từ hàm tạo
// var user = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user);
// console.log(user.name);
// console.log(user.email);
// console.log(user.showInfo());
// console.log(user.message);
// console.log(user.getName());

// console.log(User.email);
console.log(User.getEmail());

var user = new User("Hoàng An", "hoangan.web@gmail.com");
// console.log(user.getName());
// console.log(user.getEmail());

//Bài tập: Xây đựng hàm tạo: Calculator
/*
Viết các phương thức để tính toán:
- cộng
- trừ
- nhân
- chia
*/
function Calculator() {}
Calculator.prototype.add = function (a, b) {
  return +a + +b;
};
Calculator.prototype.sub = function (a, b) {
  return a - b;
};
Calculator.prototype.mul = function (a, b) {
  return a * b;
};
Calculator.prototype.div = function (a, b) {
  if (+b === 0) {
    //Error exception
    throw new Error("Không được chia cho số 0");
  }
  return a / b;
};
var calc = new Calculator();
// console.log(calc.add(10, 20));
// console.log(calc.sub(10, 20));
// console.log(calc.mul(10, 20));
// console.log(calc.div(10, 0));

//Kiểm tra 1 object được tạo từ hàm tạo nào?
// if (calc.constructor.name === "Calculator") {
//   console.log("Tạo từ hàm Calculator");
// }

// if (calc instanceof Calculator) {
//   console.log("Tạo từ hàm Calculator");
// }

var a = [];
Object.isObject = function (variable) {
  if (
    variable &&
    variable.constructor &&
    variable.constructor.name === "Object"
  ) {
    return true;
  }
  return false;
};
// if (Object.isObject(a)) {
//   console.log("Là Object");
// } else {
//   console.log("Không phải object");
// }

//Toán tử Optional Chaining (?.)
// var a = {
//   name: "Hoàng An",
// };
// console.log(a?.name?.info?.email);

// var a = {};
// console.log(a?.getName?.());

var a = null;
if (a?.length) {
  a.forEach?.(function (item) {
    console.log(item);
  });
}

/*
- Object.create()
- Tham chiếu
- Phân biệt: constructor, object, instance
*/
