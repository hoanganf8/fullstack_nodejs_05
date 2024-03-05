/*
Ngăn hành động mặc định của trình duyệt
e.preventDefault()
*/
var linkEl = document.querySelector(".link");
// linkEl.addEventListener("click", function (e) {
//   e.preventDefault();
//   var href = this.href;
//   console.log(href);
// });
// linkEl.onclick = function () {
//   var href = this.href;
//   console.log(href);
//   return false;
// };

// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
//   //   console.log("Không được đâu");
//   alert("Không được đâu");
// });

// var content = document.querySelector(".content");
// var btn = content.querySelector(".btn");
// content.addEventListener("click", function () {
//   console.log("Content clicked");
// });
// btn.addEventListener("click", function (e) {
//   e.stopPropagation();
//   console.log("Btn clicked");
// });
var menu = document.querySelector(".menu");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  var x = e.clientX;
  var y = e.clientY;
  var css = {
    display: "block",
    top: `${y}px`,
    left: `${x}px`,
  };
  Object.assign(menu.style, css);
});
document.addEventListener("click", function () {
  var css = {
    display: "none",
  };
  Object.assign(menu.style, css);
});
menu.addEventListener("click", function (e) {
  e.stopPropagation();
});
