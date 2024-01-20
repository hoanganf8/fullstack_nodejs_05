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
console.log(total);
