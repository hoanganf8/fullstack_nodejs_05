/*
Hàm (Functions)
- Cú pháp trong lập trình
- Tách các đoạn chương trình để tái sử dụng

Cú pháp: 
function tenham() {
    //Nội dung hàm
}

function tenham(thamso1, thamso2,...) {
    //Nội dung hàm
}

--> Declaration Function

Quy tắc đặt tên hàm: 
- Dùng quy tắc camelCase
- Dùng động từ (Bắt đầu: get, set, create, make, build,...)
*/

// console.log("Đoạn chương trình 1");
// var a = 10;
// var b = 20;
// var total = a + b + 10;
// console.log(total);

// console.log("Đoạn chương trình 2");
// var a = 15;
// var b = 25;
// var total = a + b + 10;
// console.log(total);

// console.log("Đoạn chương trình 3");
// var a = 50;
// var b = 100;
// var total = a + b + 10;
// console.log(total);

//Định nghĩa hàm
function showMessage(msg, type = "success") {
  //msg = Tham số
  console.log("Hello AE F8");
  console.log(msg);
  console.log(type);
}

//Gọi hàm
showMessage("Học JS không khó", "error"); //Lời gọi hàm chủ động
/*
Khi định nghĩa hàm -> Tham số (parameter)
Truyền giá trị vào tham số khi gọi hàm -> Đối số (argument)
*/
