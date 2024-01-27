/*
- Hàm có giá trị trả về (Hàm return)
-> Để trả về giá trị cho 1 hàm -> Dùng từ khóa return
- Khi dùng return -> Hàm sẽ thoát (Các đoạn chương trình sau return không hoạt động)
- Hàm không có giá trị trả về (Hàm void)
- Biến toàn cục (Global Variable): 
+ Biến được khai báo ở phạm vi ngoài hàm
+ Có thể sử dụng ở mọi nơi

- Biến cục bộ (Local Variable): 
+ Biến được khai ở trong hàm
+ Chỉ sử dụng trong hàm đã được khai báo hoặc các hàm con

LƯU Ý: Trong JS không có khái niệm THAM TRỊ và THAM CHIẾU
*/

function sum(a, b) {
  var total = a + b;
  //   console.log(total);
  console.log("Hoàng An F8");
  return total;
  console.log("Hello F8");
}

var result = sum(10, 20) + 30;
console.log(result);

function division(a, b) {
  if (b === 0) {
    return "Không tính được";
  }
  return a / b;
}
console.log(division(10, 5));

function setMessage(value) {
  message = value;
  //   console.log(message);
  //message: Biến cục bộ
}

function getMessage() {
  return message;
}

// var message = "Học JS không khó"; //Biến toàn cục
window.setMessage("Hoàng An F8");
console.log(window.getMessage());

window.console.log(window);

// var name = "Hello F8";
// console.log(name);

function confirm() {
  console.log("Confirm");
}

confirm();
