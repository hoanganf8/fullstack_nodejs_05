/*
Event: Các hành động từ phía người dùng tác động lên các thẻ html
- Mặc định JS có sẵn các sự kiện ở các thẻ html
- Mỗi thẻ html có các sự kiện khác nhau
- Sẽ có các sự kiện xuất hiện trong tất cả các thẻ html: click, dblclick, mouseover, mouseout, mousemove, mouseleave, mouseenter, mousedown, mouseup
- Việc lập trình viên: Gán nội dung cho sự kiện

Các cách gán nội dung cho sự kiện: 
- Event Handler
- Event Listener
*/

// var btn = document.querySelector(".btn");
// console.log([btn]);
// var handleClick = function () {
//   console.log("Hello anh em");
// };
// // btn.onclick = handleClick;
// btn.addEventListener("click", handleClick);

// var formSearch = document.querySelector(".form-search");
// var removeBtn = document.querySelector(".remove-btn");
// var handleSubmit = function () {
//   alert(1);
// };
// formSearch.addEventListener("submit", handleSubmit);
// formSearch.addEventListener("submit", function () {
//   alert(2);
// });
// removeBtn.addEventListener("click", function () {
//   formSearch.removeEventListener("submit", handleSubmit);
// });

var formSearch = document.querySelector(".form-search");
var nameEl = formSearch.querySelector('[name="name"]');
nameEl.addEventListener("focus", function () {
  console.log("Focus");
});
nameEl.addEventListener("blur", function () {
  console.log("Blur");
});
nameEl.addEventListener("change", function () {
  console.log("Change");
});
