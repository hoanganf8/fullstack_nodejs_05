/*
Câu lệnh rẽ nhánh if else
1. Dạng thiếu
if (condition) {
    //Code
} 
2. Dạng đầy đủ
if (condition) {
    /Code true
} else {
    //Code false
}
3. Dạng nhiều nhánh
if (condition1) {
    //Code1
} else if (condition2) {
    //Code2
} else if (condition3) {
    //Code 3
} else {
    //Code 4
}
4. Lồng nhau
if (condition1) {
    if (condition2) {
        //Code true
    } else {
        //Code false
    }
} else {
    //Code false
}
*/
var number = 0;
if (number) {
  console.log("Giá trị đúng");
} else {
  console.log("Giá trị sai");
}
// document.write(`<h1>Học Javascript không khó</h1>`);

/*
Bài tập: Tính lương thực nhận sau khi trừ thuế
Ví dụ: Cho trước tổng lương --> Tính lương sau khi trừ thuế theo bảng sau
<= 5tr --> 0%
> 5tr và <= 15tr --> 3%
Trên 15tr --> 5%
*/
var salary = 10000000;
var income, rate;
if (salary <= 5000000) {
  rate = 0;
} else if (salary > 15000000) {
  rate = 5;
} else {
  rate = 3;
}
income = salary - (salary * rate) / 100;
console.log(income);

var email = "hoangan.web@gmail.com",
  password = "123456";
if (email === "" || password === "") {
  if (email === "") {
    console.log("Vui lòng nhập email");
  } else {
    console.log("Vui lòng nhập mật khẩu");
  }
} else {
  //email !=="" && password !== ""
  console.log("Thành công");
}
