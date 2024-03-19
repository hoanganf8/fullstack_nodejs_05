//Scroll Event
/*
window.scrollY --> Lấy tọa độ theo trục Y
window.scrollX --> Lấy tọa độ theo trục X
window.scroll(x,y) --> Di chuyển thanh scroll tới vị trí mong muốn
*/
// window.addEventListener("scroll", function () {
//   var position = this.scrollY;
//   console.log(position);
// });

// var btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {
//   //   window.scroll(0, 500);
//   window.scroll({
//     top: 500,
//     behavior: "smooth",
//   });
// });

/*
Yêu cầu: Xây dựng chức năng back to top
- Mặc định button --> Ẩn
- Khi kéo thanh cuộn đến tọa độ 100px hiển thị button
- Khi click vào button --> Bay lên đầu trang kèm hiệu ứng mượt
*/

var topBtn = document.querySelector(".top-btn");
var header = document.querySelector("header");
var current = 0;
window.addEventListener("scroll", function () {
  var position = this.scrollY;
  if (position >= 100) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }

  if (position > current) {
    header.classList.remove("fixed");
  } else {
    header.classList.add("fixed");
  }
  current = position;
});
topBtn.addEventListener("click", function () {
  window.scroll({ top: 0, behavior: "smooth" });
});

//Chatbox
var chatbox = document.querySelector(".chatbox");
var chatboxContent = chatbox.querySelector(".chatbox-content");
var form = chatbox.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var message = this.children[0].value;
  chatboxContent.innerHTML += `<p>${message}</p>`;
  this.children[0].value = "";
  var scrollHeight = chatboxContent.scrollHeight;
  chatboxContent.scroll(0, scrollHeight);
});

var btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  var offsetTop = chatbox.offsetTop;
  window.scroll({
    top: offsetTop - 30,
    behavior: "smooth",
  });
});
