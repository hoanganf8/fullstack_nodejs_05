//Number: Kiểu dữ liệu nguyên thủy
console.log([Number]);
// var a = 10; //Number

//Số NaN (Not A Number)
/*
- Chủ động gán
- Ép kiểu không thành công
*/
// var b = NaN;
// if (Number.isNaN(b)) {
//   console.log("ok");
// }

//Số Infinity
// var a = -1000;
// var b = a ** 1000;
// var c = a ** 2000;
// if (Math.abs(b) === Infinity) {
//   console.log("Vượt quá giới hạn");
// }

//Kiểm tra số hoạt động được
// Number.isNumber = function (value) {
//   return (
//     typeof value === "number" &&
//     !Number.isNaN(value) &&
//     Math.abs(value) !== Infinity
//   );
// };
// var a = NaN;
// console.log(Number.isNumber(a));

//Ép kiểu

//1. Ép về kiểu số: Sử dụng hàm Number hoặc dấu +
// var a = new Number(10);
// // a = Number(a);
// a = +a;
// console.log(a, typeof a);

//2. Ép kiểu số nguyên
// var a = "123.456";
// a = parseInt(a);
// console.log(a, typeof a);

//3. Ép kiểu số thực
// var a = "123.456";
// a = parseFloat(a);
// console.log(a, typeof a);

//4. Kiểm tra 1 số có phải số nguyên hay không?
// var a = "12";
// if (Number.isInteger(+a)) {
//   console.log("Số nguyên");
// } else {
//   console.log("Không phải số nguyên");
// }

//5. Làm tròn và lấy số phần thập phân
// --> Trả về chuỗi và tự động làm tròn
// var a = 12.345678;
// a = a.toFixed(3);
// console.log(a, typeof a);

//6. Lấy tổng chữ số
// --> Trả về chuỗi và tự động làm tròn
// var a = 12.345678;
// a = a.toPrecision(3);
// console.log(a);

var numbers = [
  5,
  "10",
  null,
  2,
  undefined,
  [],
  NaN,
  Infinity,
  8,
  -Infinity,
  {},
  [1],
  7,
  true,
  12,
  false,
];
//Tính tổng các số lẻ (Chỉ tính số và chuỗi số)
var total = numbers.reduce(function (prev, number) {
  var numberConvert = parseFloat(number);

  if (
    !isNaN(numberConvert) &&
    Math.abs(numberConvert) !== Infinity &&
    !Array.isArray(number) &&
    numberConvert % 2 !== 0
  ) {
    return number + prev;
  }
  return prev;
}, 0);
console.log(total);

//toLocaleString() --> Định dạng số theo khu vực, quốc gia
var price = 120000000;
price = price.toLocaleString("vi");
console.log(price);
