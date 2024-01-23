/*
Biểu thức = Toán tử + Toán hạng
Ví dụ: total = a + b * c;

1. Toán tử số học
+, -, *, /, %, **
++, --
*/
// var a = 10;
// a--;
// --a;
// console.log(a);

var count = 1;
// var total = 10 + count++;
// var total = 10 + ++count;
// console.log(total);
// console.log(count);
// var total = count++ + ++count;
var total = ++count - --count * count++ + count--;
//total = 2 - 1 * 1 + 2 = 2 - 1 + 2
// console.log(total);

//2. Toán tử gán (=)
/*
Lưu ý: Không gán, giá trị mặc định sẽ là undefined
Toán tử gán mở rộng:
+=
-=
*=
/=
%=
*/
// var a = 10;
// a += 10; //a = a + 10
// console.log(a);

//3. Toán tử quan hệ: Kết quả chỉ trả về true/false
// >, <, >=, <=, !=, ==, ===, !==
// var a = 10;
// var b = a > 9;
// 4;
// console.log(b);
// var a = "10" === 10;
// console.log(a);

//4. Toán tử kết hợp
/*
- Và (&&): Chỉ đúng khi tất cả biểu thức con đúng
- Hoặc (||): Chỉ sai khi tất cả biểu thức con sai
- Phủ định (!): Ngược lại
Lưu ý: Khi sử dụng toán tử kết hợp cần sử dụng thêm cặp ngoặc tròn để nhóm các biểu thức

Nếu tồn tại cả 3 toán tử kết hợp trong 1 biểu thức, thứ tự ưu tiên sẽ như sau: 
! --> && --> ||
*/

// var a = 10;
// var b = a > 5 || (a > 10 && a > 20);
// console.log(b);

//5. Toán tử 3 ngôi
// dieukien ? giatridung: giatrisai
// Lưu ý: Chỉ đưa toán tử 3 ngôi vào biểu thức
// var a = 10;
// var b = a >= 10 ? "Hello F8" : "Không tồn tại";
// console.log(b);
// console.log(a >= 10 ? "Hello F8" : "Không tồn tại");
// var b = 10 + 5 + a >= 30 ? 20 : 5 + 10;
// console.log(b);

//6. Toán tử nullish (??)
// ketqua = bien ?? giatrimacdinh
/*
Cách hoạt động: Kiểm tra bien có khác null và undefined hay không?
- Nếu có: Lấy giá trị trước ??
- Nếu không: Lấy trị sau ??
*/
// var a;
// var b = a ?? "Không xác định";
// console.log(b);
//Bài tập: Viết lại toán tử nullish bằng toàn tử 3 ngôi

// var c = null;
// var d = c !== null && c !== undefined ? c : "Không xác định";
// console.log(d);

//7. Truthy, Falsy
/*
Truthy: Khi đưa giá trị của các biến vào biểu thức logic --> Tự động ép kiểu về true
-> Các trường hợp không phải falsy
Falsy: Khi đưa giá trị của các biến vào biểu thức logic --> Tự động ép kiểu về false
- null
- undefined
- ""
- NaN
- false
- 0
*/
// var a = -0n;
// var b = a ? "Hello F8" : "Không xác định";
// console.log(b);

//8. Toán tử &&
/*
Nếu giá trị trước && là truthy --> Lấy giá trị sau &&
Ngược lại, lấy giá trị trước &&
*/
// var a = 0;
// var b = a && "Hello F8";
// console.log(b);
// var a = 1;
// var b = a && undefined && "F8";
// console.log(b);

//9. Toán tử ||
// var a = 0;
// var b = a || "" || "F8";
// console.log(b);
