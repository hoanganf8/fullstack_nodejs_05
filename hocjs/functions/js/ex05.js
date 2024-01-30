function showNumber(i) {
  console.log(i);
  if (i > 1) {
    showNumber(i - 1);
  }
}
// showNumber(10);

function getTotal(n) {
  if (n === 1) {
    return n;
  }
  return n + getTotal(n - 1);
}

console.log(getTotal(10));
/*
- Kỹ thuật gọi lại chính hàm đang định nghĩa
- Chú ý: 
+ Phải có điều kiện dừng
+ Khi gọi lại phải chú ý thay đổi đối số để khớp với điều kiện dừng
*/
