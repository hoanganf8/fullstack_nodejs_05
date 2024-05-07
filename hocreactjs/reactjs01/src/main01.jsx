import React from "react";
import ReactDOM from "react-dom/client";
const root = document.querySelector("#root");

//DOM ảo ==> ReactDOM ==> DOM thật

const reactRoot = ReactDOM.createRoot(root);

//Tạo React Element
// const h1 = React.createElement(
//   "h1",
//   {
//     className: "title",
//     id: "title",
//   },
//   React.createElement(
//     "a",
//     {
//       href: "https://fullstack.edu.vn",
//       target: "_blank",
//     },
//     "Fullstack F8"
//   )
// );
// const liElements = [];
// for (let i = 1; i <= 100; i++) {
//   liElements.push(React.createElement("li", {}, "Item " + i));
// }

// const elements = React.createElement(
//   "div",
//   {
//     className: "container",
//   },
//   React.createElement("h1", { className: "title" }, "Học lập trình không khó"),
//   React.createElement(
//     "h2",
//     { className: "sub-title" },
//     "Học React JS không khó"
//   ),
//   React.createElement(
//     "ul",
//     {
//       id: "menu",
//     },
//     ...liElements
//   )
// );

//JSX (Javascript XML)

//Flow: JSX ==> Javascript Complier ==> React Element ==> React DOM ==> HTML
const title = (
  <>
    Học <i>React</i> không khó
  </>
);
const check = true;
const lists = [
  <li key={1}>Item 1</li>,
  <li key={2}>Item 2</li>,
  <li key={3}>Item 3</li>,
  <li key={4}>Item 4</li>,
  <li key={5}>Item 5</li>,
];
const users = ["User 1", "User 2", "User 3"];
const usersjsx = users.map((user, index) => <li key={index}>{user}</li>);
const GetName = () => {
  return <h2>Hoàng An F8</h2>;
};
//Component
const elements = (
  <>
    <div className="container">
      <h1 id="title">{title}</h1>
      <h2>Học lập trình để đi làm</h2>
      {/* {getName()} */}
      <GetName />
      <GetName></GetName>
      <ul>{usersjsx}</ul>
      {check ? (
        <ul>{lists}</ul>
      ) : (
        <>
          <p>Không có gì</p>
          <p>Không có gì</p>
        </>
      )}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusantium
        assumenda totam alias mollitia quos laboriosam amet fugit sapiente
        nobis, praesentium magnam et perspiciatis. Sint eveniet cupiditate
        eligendi consequuntur molestiae!
      </p>
    </div>
    <div className="content"></div>
  </>
);

reactRoot.render(elements);

/*
Bài tập: 
<div class="container">
    <h1 class="title">Học lập trình không khó</h1>
    <h2 class="sub-title">Học React JS không khó</h2>
    <ul id="menu">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
    </ul>
</div>

Hiển thị 100 thẻ li từ Item 1 đến Item 100
*/
