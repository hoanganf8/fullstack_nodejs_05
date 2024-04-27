// const pattern = /abc/;
// console.dir(pattern);

// const pattern = new RegExp("abc");
// console.log(pattern);

// const str = "hoangan";
// const pattern = /[abc]/;
// console.log(pattern.test(str));

/*
Kiểm tra username hợp lệ: 
- Chỉ chấp nhận chữ thường, số, -, _
- Độ dài từ 5 ký tự trở lên
- Bắt đầu bằng chữ hoặc gạch dưới
*/

// const username = "11an12";
// const pattern = /^[a-z_][a-z0-9-_]{4,}$/;
// console.log(pattern.test(username));

/*
Kiểm tra email hợp lệ
username@domain.ext
1. username
- Bắt đầu bằng chữ cái
- Chấp nhận chữ HOA, thường, gạch dưới, gạch ngang, . và số
- Tối thiểu 3 ký tự trở lên
2. domain
- Bắt đầu bằng chữ cái
- Chấp nhận chữ HOA, thường, gạch dưới, gạch ngang, . và số
- Tối thiểu 1 ký tự

3. ext
- Chữ cái thường, HOA
- Tối thiểu 2 ký tự

^[a-zA-Z][a-zA-Z0-9_\-\.]+[a-zA-Z0-9]@([A-Za-z]|[a-zA-Z][a-zA-Z0-9-_\.]*[a-zA-Z0-9])\.[a-zA-Z]{2,}$

Kiểm tra URL hợp lệ

https://fullstack-nodejs.fullstack.edu.vn:8080/khoa-hoc/khoa-fullstack

Lưu ý: 
- Scheme có thể là http hoặc https
- subdomain có thể có hoặc không?
- port có thể có hoặc không?
- path có thể có hoặc không
Lưu ý khi không có path có thể có / cuối cùng hoặc không

.com
.vn
.edu
*/

// const pattern =
//   /(http|https):\/\/(([a-z]|[a-z][a-z0-9-_]*[a-z0-9])\.)+([a-z]{2,})(:[0-9]{2,})*(\/?|\/[^\s]+)/gi;

// const content = `Lorem Ipsum is https://fullstack.edu.vn simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when https://vnexpress.net an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially http://dantri.com.vn:8080 unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
// `;

// const urls = content.match(pattern);
// console.log(urls);

const url = `https://fullstack.edu.vn/khoa-hoc/abc`;
const pattern =
  /^(?:http|https):\/\/((?:(?:[a-z]|[a-z][a-z0-9-_]*[a-z0-9])\.)+(?:[a-z]{2,})(?::[0-9]{2,})*)(?:\/?|\/[^\s]+)$/i;

const result = url.match(pattern);
console.log(result);

//Capturing Group

//Non-Capturing Group --> Loại bỏ giá trị trong cặp ngoặc () ra khỏi kết quả khi cắt chuỗi
//Cú pháp: ?:

//Thay thế --> Tìm hiểu thay thế

const phonePattern = /(0(\d{9}))/g;
let content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took 0388875179 a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 0123456789 into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
// content = content.replace(phonePattern, "***");
content = content.replace(
  phonePattern,
  `<a href="https://zalo.me/$1" title="Zalo của $2">Zalo: $1</a>`
);
document.body.innerHTML = content;
