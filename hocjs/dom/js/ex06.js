var textEl = document.querySelector(".text");
var btn = document.querySelector(".btn");
// textEl.style = `color: red; font-style: italic`;
// textEl.style.color = "red";
// textEl.style.fontStyle = "italic";
// textEl.style.background = "pink";
var css = {
  color: "red",
  fontStyle: "italic",
  backgroundColor: "pink",
};
Object.assign(textEl.style, css);

btn.addEventListener("click", function () {
  //   console.log(textEl.style.cssText);
  //   textEl.style.color = "green";
  var css = {
    color: "green",
    backgroundImage: `url("https://picsum.photos/536/354")`,
    transform: `translateX(30px)`,
  };
  Object.assign(textEl.style, css);
});

//Bài tập: Thêm các thuộc tính sau (Lắng nghe sự kiện click vào nút Change)
/*
background-image
transform translateX 30px
*/
