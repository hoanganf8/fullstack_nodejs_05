//Reduce
/*
Cú pháp:
result = array.reduce(callback, initialValue)

callback: 3 tham số
+ prevValue
+ currentValue
+ index

Cách hoạt động

1. Có initialValue
- Vòng lặp sẽ chạy từ phần tử có index = 0
- prevValue của lần chạy đầu tiên sẽ là initialValue
- currentValue: Giá trị từng phần tử của mảng

2. Không có initialValue
- Vòng lặp sẽ chạy từ phần tử có index = 1
- prevValue của lần chạy đầu tiên sẽ là phần tử có index = 0
- currentValue: Giá trị từng phần tử của mảng

prevValue của lần lặp sau sẽ là return của lần lặp trước
Giá trị của vòng lặp reduce --> Return của lần cuối cùng
*/

var numbers = [5, 10, 15, 20, 25];
// console.log(numbers);
var result = numbers.reduce(function (prevValue, currentValue, index) {
  //   console.log(prevValue, currentValue);
  return prevValue + currentValue;
});
console.log(`result = ${result}`);

//Bài tập 1:
var numbers = [5, 10, 100, 15, 20, 25];
// Tìm phần tử lớn nhất dùng reduce
var maxValue = numbers.reduce(function (max, number) {
  return max < number ? number : max;
});
console.log(maxValue);

//Bài tập 2:
var arrA = [1, 3, 5, 7, 2];
var arrB = [1, 5, 7, 11];
//Yêu cầu: Tìm phần tử nằm ở arrA nhưng không có ở arrB (Dùng reduce)

var diffArr = arrA.reduce(function (prev, current) {
  //   !arrB.includes(current) && prev.push(current);
  //   return prev;
  return !arrB.includes(current) && prev.push(current), prev;
}, []);
console.log(diffArr);

function demo() {
  return 1, 2, 3, 4;
}
// console.log(demo());

//Tham chiếu
var a = ["Hoàng An", "hoangan.web@gmail.com"];
// var b = a;
//Copy Array
//1, dùng các phương thức xử lý mảng có trả về mảng mới (shallow copy)
// var b = a.map(function (item) {
//   return item;
// });
//2, dùng spread operator (Học sau) (shallow copy)
// var b = [...a];

//3, dùng JSON (Học sau) (deep copy)
var b = JSON.parse(JSON.stringify(a));
b[1] = "admin@gmail.com";

console.log(a);
console.log(b);
