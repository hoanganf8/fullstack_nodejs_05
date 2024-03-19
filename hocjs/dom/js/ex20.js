var input = document.querySelector("input");
var handleBeforeUnload = function (e) {
  e.preventDefault();
  e.returnValue = true;
};
input.addEventListener("input", function () {
  var value = this.value;
  if (value !== this.defaultValue) {
    window.addEventListener("beforeunload", handleBeforeUnload);
  } else {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  }
});

/*
- DOM: HTML, Nodes
- Array, Object
- Math
Player nghe nhạc
*/
