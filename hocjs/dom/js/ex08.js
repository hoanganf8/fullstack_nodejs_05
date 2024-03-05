var btn = document.querySelector(".btn");
btn.style.cursor = "move";
var offsetX = 0,
  offsetY = 0;
btn.addEventListener("mousedown", function (e) {
  document.addEventListener("mousemove", handleDrag);
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});

var handleDrag = function (e) {
  var x = e.clientX - offsetX - 2;
  var y = e.clientY - offsetY - 2;
  btn.style.translate = `${x}px ${y}px`;
};
