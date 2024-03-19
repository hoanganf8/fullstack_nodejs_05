//Kiểm tra cây DOM được hình thành hay chưa?
document.addEventListener("DOMContentLoaded", function () {
  var h1 = document.querySelector("h1");
  var img = document.querySelector("img");
  console.log(h1);
  console.log(img.width);
});

window.addEventListener("load", function () {
  console.log("Tải xong");
  var img = document.querySelector("img");
  console.log(img.width);
  var preloader = document.querySelector(".preloader");
  preloader.remove();
});
