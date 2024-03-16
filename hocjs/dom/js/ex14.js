//Tạo Node mới
var h1 = document.createElement("h1");
h1.innerText = "Học lập trình không khó";
h1.classList.add("title", "title-large");

//Đưa node lên UI
var root = document.querySelector("#root");
root.append(h1);

var h2 = document.createElement("h2");
h2.innerText = "Hello anh em";
root.append(h2);

var button = document.createElement("button");
button.innerText = "Click me";
root.append(button);
var count = 0;
button.addEventListener("click", function () {
  //   h2.innerText = "Hello anh em F8";
  //   h2.remove();
  var newNode = document.createElement("h3");
  newNode.innerText = "Item " + ++count;
  //   root.append("<h2>Hello</h2>");
  //   root.insertBefore(newNode, h2);
  //   root.insertBefore(newNode, h1.nextElementSibling);
  root.replaceChild(newNode, h2);
  root.append(h2);
});
