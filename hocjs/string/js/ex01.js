//string: Kiểu dữ liệu nguyên thủy
/*
Trong JS: Kiểu dữ liệu nguyên thủy hoạt động giống Object (Kiểu dữ liệu tham chiếu) --> Đối tượng chuỗi
*/
// var a = `F8`;
// console.log(typeof a);
// if (typeof a === "string") {
//   console.log("Đây là chuỗi");
// }

//Các cách khai báo chuỗi
var a = "F8"; //string
// console.log(a, typeof a, a.length);
var b = String("F8"); //string
// console.log(b, typeof b, b.length);
var c = new String("F8"); //Trả về object
// console.log(c, typeof c, c.length);
//Ở trong JS: Truy cập vào các thuộc tính, phương thức của 1 object bằng dấu chấm (.)

//Hàm tạo của kiểu chuỗi (Hàm bọc kiểu dữ liệu nguyên thủy) --> Định nghĩa các phương thức, thuộc tính
//Trong JS: Mỗi kiểu dữ liệu sẽ có 1 hàm tạo (Function Constructor): String, Number, Array, Object, Boolean...
console.log(String.prototype);

//1. length --> Lấy độ dài của chuỗi
// var fullname = "Hoàng An F8";
// console.log(fullname.length);

//2. charAt() --> Lấy ký tự theo index (Bắt đầu từ 0)
// var fullname = "Hoàng An F8";
// console.log(fullname.charAt(0));

//3. charCodeAt() --> Lấy mã ASCII ở ký tự theo index
// var fullname = "Hoàng An F8";
// console.log(fullname.charCodeAt(0));

//4. concat() --> Nối chuỗi
// var fullname = "Hoàng An F8";
// var result = fullname.concat("Javascript", "HTML", "CSS");
// console.log(result);

//5. includes() --> Tìm chuỗi con trong chuỗi cha --> Trả về true / false
// var fullname = "Hoàng An F8";
// console.log(fullname.includes("F8"));

//6. indexOf() --> Tìm chuỗi con trong chuỗi cha --> Trả về index đầu tiên tìm được (Không tìm thấy trả về -1)

//7. lastIndexOf() --> Tìm chuỗi con trong chuỗi cha --> Trả về index cuối cùng tìm được (Không tìm thấy trả về -1)
// var fullname = "Hoàng F8 An F8";
// console.log(fullname.lastIndexOf("F8"));

//8. slice(start, end) --> Cắt chuỗi từ start đến trước end (end-1)
/*
- slice(5) --> Lấy từ index = 5 đến hết chuỗi
- slice(-5) --> Lấy 5 ký tự cuối chuỗi
*/
// var fullname = "Hoàng F8 An F8";
// console.log(fullname.slice(-5));

//9. replace() --> Thay thế từ khóa đầu tiên tìm được
var fullname = "Hoàng F8 An F8";
// console.log(fullname.replace("F8", "Google"));
/*
- Hàm replace hỗ trợ thay thế bằng biểu thức chính quy (Regular Expression) --> Học sau
*/

//10. replaceAll() --> Thay thế tất cả từ khóa tìm được
var fullname = "Hoàng F8 An F8";
// console.log(fullname.replaceAll("F8", "Google"));

//11. split() --> Cắt chuỗi thành mảng dựa vào ký tự phân cách

// var fullname = "Hoàng F8 An F8";
// console.log(fullname.split(""));

//12. toUpperCase() --> Chuyển tất cả thành chữ HOA
var fullname = "Hoàng F8 An F8";
// console.log(fullname.toUpperCase());

//13. toLowerCase() --> Chuyển tất cả thành chữ thường
var fullname = "Hoàng F8 An F8";
// console.log(fullname.toLowerCase());

//14. trim() --> Cắt khoảng trắng đầu và cuối chuỗi
var fullname = "   Hoàng F8 An F8   ";
// console.log(fullname);
// console.log(fullname.trim());

//15. trimStart(), trimLeft() --> Cắt khoảng trắng đầu chuỗi

//16. trimEnd(), trimRight() --> Cắt khoảng trắng cuối chuỗi

//17. match() --> Cắt chuỗi bằng biểu thức chính quy
var content = `Xin chào, 0388875179 F8 0123456789`;
var phone = content.match(/0\d{9}/g);
// console.log(phone);

//Bài tập 1: Cho trước email --> Lấy username của email đó
var email = `hoangan@fullstack.edu.vn`;
var position = email.indexOf("@");
var username = email.slice(0, position);
// console.log(username);

//Bài tập 2: Kiểm tra 1 chuỗi xem chuỗi có phải TẤT CẢ KÝ TỰ ĐỀU VIẾT HOA KHÔNG
// var fullname = `TẠ HOÀNG AN`;
// if (fullname === fullname.toUpperCase()) {
//   console.log("Hợp lệ");
// } else {
//   console.log("Không hợp lệ");
// }

//Bài tập 3: Đảo từ đầu và từ cuối của 1 chuỗi
var str = "Xin chào, tôi tên là Tạ Hoàng An";
//Output: An chào, tôi tên là Tạ Hoàng Xin
var firstSpaceIndex = str.indexOf(" ");
var lastSpaceIndex = str.lastIndexOf(" ") + 1;

var firstWord = str.slice(0, firstSpaceIndex);
var lastWord = str.slice(lastSpaceIndex);
var middleWord = str.slice(firstSpaceIndex, lastSpaceIndex);

var output = lastWord + middleWord + firstWord;
console.log(output);
