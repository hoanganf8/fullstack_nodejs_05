//Event Object
var btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  console.log(this);
  console.log(e.target);
});

var items = document.querySelector(".menu");

items.addEventListener("click", function (e) {
  //   e.target.remove();
  e.target.style.textDecoration = "line-through";
});
// console.log(items);
// for (var i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", function () {
//     console.log(this);
//   });
// }
// items.forEach(function (item) {
//   item.addEventListener("click", function () {
//     console.log(item);
//   });
// });
// Array.from(items).map(function (item) {
//   item.addEventListener("click", function () {
//     console.log(item);
//   });
// });
