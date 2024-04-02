import { data } from "./products.js";
//Import ==> Logic ==> Export

export const products = data;

export const a = 10;
export const b = 20;
export default function getA() {
  console.log("Get A");
}
// export default const getA = function () {
//   console.log("get A");
// };
export function getB() {
  console.log("get B");
}

// export { a, b }; //export named

// export { getB };

// export default getA; //export default

/*
Lưu ý: Export default viết trực tiếp chỉ có tác dụng với function truyền thống và class (Không áp dụng được với biến)

index.html --> app.js --> a.js --> b.js --> c.js --> d.js

d.js --> Import từ thư viện bên ngoài
c.js --> Import từ d.js
b.js --> Import từ c.js
a.js --> Import từ b.js
app.js --> Import từ a.js

d, c, b, a --> File trung gian (Import và Export)

Import cả folder
*/
