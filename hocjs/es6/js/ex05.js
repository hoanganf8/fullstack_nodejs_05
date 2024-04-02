//Class
class Person {
  name = "";
  constructor(name = "") {
    // console.log("Constructor Person");
    // console.log(name);
    this.name = name;
  }
}

class Girl extends Person {
  #email = "hoangan.web@gmail.com"; //Cách tạo thuộc tính mới từ phiên bản ES13 (Năm 2022)
  #data = []; //Thuộc tính data sẽ được private trong class Girl --> Tính năng của ES13
  constructor(name) {
    // console.log("Constructor Girl");
    // console.log(name);
    //Gọi constructor của cha
    super(name);
  }
  #getName() {
    return this.name;
  }
  #getEmail() {
    return this.#email;
  }
  getInfo() {
    return `
    Name: ${this.#getName()}
    Email: ${this.#getEmail()}
    `;
  }
  setData(data) {
    this.#data.push(data);
  }
  getData() {
    return this.#data;
  }
}

const girl = new Girl("Hoàng An F8");
console.log(girl);
console.log(girl.getInfo());
// console.log(girl.#getName());
// girl.setData("Hello 1");
// girl.setData("Hello 2");
// console.log(girl.getData());

/*
Từ class con có thể truy cập các thuộc tính và phương thức của class cha và ngược lại
*/

class User {
  #data = ["Item 1", "Item 2", "Item 3"];
  #username = "Hoàng An";
  constructor() {}

  //getter
  get data() {
    return this.#data;
  }

  //setter
  set data(value) {
    this.#data.push(value);
  }
  static #name = "Hoàng An";
  static getName() {
    // return "Hello anh em";
    return this.#name;
  }
}

const user = new User();
// user.data = "Item 4";
// user.data = "Item 5";
// console.log(user.data);
// console.log(user.username);
console.log(User.getName());
// console.log(User.#name);
/*
Lưu ý: 
- Trong hàm static --> this sẽ là class hiện tại
- Trong hàm non-static --> this sẽ là object
- Để truy cập thuộc tính, phương thức non-static từ phương thức static --> Cần chuyển this thành object
- Để truy cập thuộc tính, phương thức static từ phương thức non-static --> Cần chuyển từ this thành class
*/
