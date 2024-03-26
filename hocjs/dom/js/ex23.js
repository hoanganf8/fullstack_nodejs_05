//Class
class User {
  //Hàm khởi tạo
  constructor(name, email) {
    console.log(name, email);
    //Phương sẽ chạy đầu tiên khi object được khởi tạo từ class
    console.log("Constructor");

    //Định nghĩa thuộc tính
    this.name = name;
    this.email = email;
  }

  //Định nghĩa phương thức
  getName() {
    return this.name;
  }

  getEmail = function () {
    return this.email;
  };
}

//Kế thừa
class Boy extends User {
  //Class boy sẽ được sử dụng các phương thức và thuộc tính của class User
  //   constructor() {
  //     super();
  //   }
  getInfo() {
    return `
    - Name: ${this.getName()}
    - Email: ${this.getEmail()}
    `;
  }
}
// var boy = new Boy("Hoàng An", "hoangan.web@gmail.com");
// console.log(boy.getInfo());

//Web Component
/*
Gom các thẻ html có sẵn --> Thẻ html riêng (custom element)
- Có 2 từ trở lên
- Nối bằng gạch ngang
Ví dụ: counter-app, heading-element

Bước xây dựng 1 compponent

- Tạo component: Dùng class tạo hàm xử lý
- Tạo element từ component --> Đặt tên cho component bằng 1 html
*/

class HelloWorld extends HTMLElement {
  //Khi component được đưa vào DOM
  connectedCallback() {
    console.log("Connected");
    var text = this.innerText;
    var color = this.dataset.color;
    this.innerHTML = `<h1 style="color: ${color}">${text}</h1>`;
    var btn = document.createElement("button");
    btn.innerText = "Click me";
    this.append(btn);
    var currentEl = this;
    btn.addEventListener("click", function () {
      console.log("Click me");
      currentEl.innerText = "Click me";
    });
  }

  //Khi component bị loại khỏi DOM
  disconnectedCallback() {
    console.log("Disconnected");
  }

  //   attributeChangedCallback() {
  //     console.log("Thuộc tính thay đổi");
  //   }
}

customElements.define("hello-world", HelloWorld);

// var btn = document.querySelector(".btn");
// var helloWorld = document.querySelector(".hello-world");
// var check = true;
// btn.addEventListener("click", function () {
//   if (check) {
//     helloWorld.remove();
//     check = false;
//   } else {
//     document.body.append(helloWorld);

//     check = true;
//   }
// });

class Counter extends HTMLElement {
  connectedCallback() {
    //shadow: this
    //Tạo shadow root
    var shadow = this.attachShadow({
      mode: "open",
    });
    shadow.innerHTML = `
    <div class="counter-app">
        <h1>Counter App</h1>
        <h2>0</h2>
        <button class="decrement-btn">-</button>
        <button class="increment-btn">+</button>
    </div>
    <style>
        .counter-app {
            border: 1px solid red;
            padding: 30px;
        }
        h1, h2 {
            color: red;
        }
    </style>
    `;
    var h2 = shadow.querySelector("h2");
    var incrementBtn = shadow.querySelector(".increment-btn");
    var decrementBtn = shadow.querySelector(".decrement-btn");
    incrementBtn.addEventListener("click", function () {
      h2.innerText++;
    });
    decrementBtn.addEventListener("click", function () {
      h2.innerText--;
    });
  }
}
customElements.define("counter-app", Counter);

//Tạo showdow host
var title = document.querySelector(".title");

//Tạo show root (Nằm trong host)
var shadowRoot = title.attachShadow({ mode: "open" });
shadowRoot.innerHTML = "Hello";
