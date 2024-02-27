/*
DOM = Document Object Model

1. DOM Element

2. DOM HTML

3. DOM CSS

4. DOM Event

5. DOM Event Listener

6. DOM Nodes

7. DOM Navigation

8. DOM Document
*/

// console.log(document);
// console.log(document.head);
// console.log(document.body);

//Khái niệm: Muốn thao tác với các thẻ html --> Truy cập vào thẻ html --> Trả về Object

//DOM Element

//1. Truy cập theo id --> Trả về phần tử đầu tiên tìm được
//getElementById(id)

//2. Truy cập theo class --> Trả về 1 danh sách các phần tử tìm được
//getElementsByClassName(class)
//Nếu muốn thao tác với các thẻ html đã chọn --> Lặp qua từng phần tử

// var titles = document.getElementsByClassName("title");
// for (var i = 0; i < titles.length; i++) {
//   console.log(titles[i]);
// }

//3. Truy cập theo tên thẻ --> Trả về 1 danh sách các phần tử tìm được
//getElementsByTagName(tag)
// var titles = document.getElementsByTagName("h3");
// console.log(titles);

//4. Truy cập theo selector (Số ít) --> Trả về phần tử đầu tiên
// var title = document.querySelector("#title");
// console.log(title);

//5. Truy cập theo selector (Số nhiều) --> Trả về danh sách các phần tử tìm được
// var titles = document.querySelectorAll(".title");
// console.log(titles);

//Chọn phâp cấp
// var h2 = document.querySelector("#wrapper #content h2");
var wrapper = document.getElementById("wrapper");
var content = wrapper.getElementsByClassName("content")[0];
var h2 = content.getElementsByTagName("h2")[0];

//Event
//Event Handler
h2.onclick = function () {
  console.log("Hello F8");
  h2.innerText = "Học JS không khó";
};
