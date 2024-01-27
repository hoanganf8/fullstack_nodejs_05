/*
Vòng lặp:
- Cú pháp trong lập trình
- Lặp đi lặp lại 1 đoạn chương trình để giải quyết bài toán

2 loại: 
- Biết trước số lần lặp: for
- Không biết trước: while, do while

Vòng lặp for
for (gia_tri_khoi_tao; dieu_kien_dung; buoc_nhay) {

}
*/
// for (var i = 0; i < 10; i++) {
//   console.log(`Hello: ${i}`);
// }
// for (var i = 10; i > 0; i--) {
//   console.log(`Hello: ${i}`);
// }
//scope
// for (var i = 1; i <= 5; i++) {
//   for (var j = 1; j <= 5; j++) {
//     console.log(`i = ${i} - j = ${j}`);
//   }
// }

/*
Bài tập 1: S = 1 + 2 + 3 + .. + N
*/
var n = 5;
var total = 0;
for (var i = 1; i <= n; i++) {
  total += i; //total = total + i
}
console.log(`Tổng = ${total}`);

/*
Chạy chương trình: n = 5, total = 0
- i = 1 ==> total = total + i = 0 + 1 = 1
- i = 2 ==> total = total + i = 1 + 2 = 3
- i = 3 ==> total = total + i = 3 + 3 = 6
- i = 4 ==> total = total + i = 6 + 4 = 10
- i = 5 ==> total = total + i = 10 + 5 = 15
*/

/*
Bài tập 2: Tính trung bình cộng các số chẵn từ 1 đến n
*/
var n = 10;
var count = 0;
var total = 0;
var avg;
for (var i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    total += i;
    count++;
  }
}
avg = total / count;
console.log(`Trung bình cộng: ${avg}`);

/*
Bài tập 3: Tính giá trị biểu thức
Total = 1 + 1*2 + 1*2*3 + 1*2*3*..*N

N = 5;
1 + 1*2 + 1*2*3 + 1*2*3*4 + 1*2*3*4*5
*/
// var n = 5;
// var total = 0;
// var subTotal = 1;
// for (var i = 1; i <= n; i++) {
//   subTotal *= i;
//   console.log(`Subtotal = ${subTotal}`);
//   total += subTotal;
// }
// console.log(`Kết quả = ${total}`);

/*
Bài tập 4: Kiểm tra số n có phải số nguyên tố
- Số nguyên
- > 1
- CHỈ chia hết cho 1 và chính nó
*/

var n = 5;
var isPrime = true; //Giả định n là số nguyên tố
if (n % 1 !== 0 || n <= 1) {
  isPrime = false;
} else {
  //Chạy vòng lặp từ 2 đến n - 1
  //Kiểm tra xem số n có chia hết cho i hay không?
  //Nếu n chia hết cho i --> Không phải số nguyên tố
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break; //Thoát vòng lặp khi vòng lặp chưa chạy xong
    }
  }
}
if (isPrime) {
  console.log(`${n} là số nguyên tố`);
} else {
  console.log(`${n} không phải số nguyên tố`);
}
// ==> Kỹ thuật đặt cờ hiệu (Cắm cờ)
