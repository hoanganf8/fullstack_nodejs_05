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
  {
    id: 3,
    name: "User 3",
    email: "user1@gmail.com",
  },
];

var root = document.querySelector("#root");

// var render = function () {
//   root.innerHTML = `
// <form>
//     <div>
//         <input type="text" name="name" placeholder="Nhập tên..." />
//     </div>
//     <div>
//         <input type="text" name="email" placeholder="Email..." />
//     </div>
//     <button>Thêm</button>
// </form>
// <ul>
//     ${users
//       .map(function (user) {
//         return `<li>${user.name} - ${user.email} <button class="remove">&times;</button></li>`;
//       })
//       .join("")}
// </ul>
// `;
// };

// render();

// root.addEventListener("click", function (e) {
//   if (e.target.classList.contains("remove")) {
//     e.target.parentElement.remove();
//   }
// });

// var form = root.querySelector("form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   var name = this.querySelector('[name="name"]').value;
//   var email = this.querySelector('[name="email"]').value;
//   users.push({
//     id: (Math.random() * 1000 + 1000).toPrecision(3),
//     name: name,
//     email: email,
//   });
//   render();
// });

//<img src="" onerror="window.location.href='https://fullstack.edu.vn'"/>

// var ul = document.createElement("ul");
// users.forEach(function (user) {
//   var li = document.createElement("li");
//   li.innerText = `${user.name} - ${user.email}`;
//   var button = document.createElement("button");
//   button.innerHTML = "&times;";
//   li.append(button);
//   ul.append(li);
//   button.addEventListener("click", handleRemove);
// });
// root.append(ul);

// function handleRemove(e) {
//   e.target.parentElement.remove();
// }

var F8 = {
  createElement: function (tag, attributes = {}, ...children) {
    var element = document.createElement(tag);
    if (children.length) {
      children.forEach(function (item) {
        element.append(item);
      });
    }
    if (Object.keys(attributes).length) {
      Object.keys(attributes).forEach(function (attribute) {
        var value = attributes[attribute];
        if (attribute.startsWith("on")) {
          var eventName = attribute.replace("on", "").toLowerCase();
          element.addEventListener(eventName, value);
        } else {
          element[attribute] = value;
        }
      });
    }
    return element;
  },
};

// var div = F8.createElement(
//   "div",
//   { className: "container", id: "main" },
//   F8.createElement("h1", { className: "title" }, "Học JS không khó"),
//   F8.createElement("h2", { className: "sub-title" }, "Học JS quá khó"),
//   F8.createElement(
//     "button",
//     {
//       type: "button",
//       className: "btn",
//       onClick: function (e) {
//         e.target.style.color = "red";
//       },
//     },
//     "Click me"
//   )
// );
var usersEl = users.map(function (user) {
  return F8.createElement(
    "li",
    {
      onClick: function (e) {
        e.target.style.color = "red";
      },
    },
    `${user.name} - ${user.email}`,
    F8.createElement(
      "button",
      {
        type: "button",
        onClick: function (e) {
          e.target.parentElement.remove();
        },
      },
      "Xóa"
    )
  );
});
var app = F8.createElement("ul", {}, ...usersEl);
root.append(app);

//Counter
var counter = F8.createElement(
  "div",
  {
    className: "counter-app",
  },
  F8.createElement("h1", {}, 0),
  F8.createElement(
    "button",
    {
      type: "button",
      onClick: function (e) {
        e.target.previousElementSibling.innerText++;
      },
    },
    "+"
  ),
  F8.createElement(
    "button",
    {
      type: "button",
      onClick: function (e) {
        e.target.previousElementSibling.previousElementSibling.innerText--;
      },
    },
    "-"
  )
);
root.append(counter);
