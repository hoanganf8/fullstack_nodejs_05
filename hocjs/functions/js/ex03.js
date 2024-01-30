//Closure: Hàm có thể truy cập vào các thuộc tính / biến của scope (Phạm vi) chứa nó
/*
3 phạm vi hàm closure truy cập được
- Biến cục bộ của chính nó
- Biến cục bộ của hàm cha
- Biến toàn cục

Lưu ý: Các hàm trong JS đều là hàm closure
*/
var a = 10;
function init(value = "F8") {
  console.log("init");
  var b = 20;
  function show() {
    var c = 30;
    console.log("show");
    console.log(`a = ${a}`);
    console.log(`value = ${value}`);
    console.log(`b = ${b}`);
    console.log(`c = ${c}`);
  }
  show();
}

// init();

function sum(a) {
  return function (b) {
    return a + b;
  };
}

var a = 10;
var add = sum(a);
var b = 20;
var c = 30;
// console.log(add(b));
// console.log(add(c));

//Expression Function

// var getMessage = function () {
//   console.log("Học JS không khó");
// };

// getMessage();

//Hoisting

// function test() {
//   console.log("Test 1");
// }
// function test() {
//   console.log("Test 2");
// }
// test();

//IIFE
(function (msg) {
  console.log("Học lập trình không khó", msg);
})("F8");
