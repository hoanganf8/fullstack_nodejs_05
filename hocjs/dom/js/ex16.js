var root = document.querySelector("#root");
var h1 = document.createElement("h1");
var textNode = document.createTextNode(0);
h1.innerText = "Học lập trình (";
h1.append(textNode);
h1.append(")");
root.append(h1);
// var h1 = h1.cloneNode(true);
// root.append(h1);

var button = document.createElement("button");
button.innerText = "Up";
button.addEventListener("click", function () {
  textNode.data++;
});
root.append(button);

var comment = document.createComment("Đây là comment");
root.append(comment);

var title = document.querySelector(".title");
var length = title.dataset.length;
for (var i = 0; i < length; i++) {
  var newTitle = title.cloneNode(true);
  newTitle.innerText = newTitle.innerText.replaceAll("{index}", i);
  title.parentElement.append(newTitle);
}
title.remove();

/*
1. Tại sao phải dùng DOM Node?
2. Cách tạo Node Element, Text Node, Comment Node,...
3. Các thao tác với Node: append, prepend, insertBefore, remove, replaceChild, cloneNode,...

*/
