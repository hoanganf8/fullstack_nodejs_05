//ES5: CommonJS --> Chỉ chạy trên Server
//ES6: ES6 Module --> Chạy được cả server và browser
/*
ES6 Module
1. Export: Muốn file khác sử dụng tài nguyên gì thì export cái đó
- default --> Trong 1 file chỉ có 1 default
- named

2. Import: Cần sử dụng tài nguyên gì thì import tài nguyên đã được export
- default --> Tên có thể đặt bất kỳ
- named

Lưu ý: Khi import có cả default và named --> named phải ở sau default

import React, {useState, useCallback} from "react"
*/
// import getA, { getB, a, b as _b, products } from "../modules/home.js";
// getA();
// getB();
// console.log(a);
// console.log(_b);
// console.log(products);

import { a, b, c } from "../modules/todos/index.js";
console.log(a, b, c);

//Xử lý bất đồng bộ
//Callback
//Promise
//Async Await
//Event Loop
//Stack, Queue
