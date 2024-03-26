// var range = document.querySelector(".range");
// var output = document.querySelector(".output");
// var finishEvent = new Event("finish", {
//   cancelable: true,
// });
// range.addEventListener("input", function (e) {
//   var value = this.value;
//   if (+value === 100) {
//     console.log(e);
//     finishEvent.initialTimestamp = e.timeStamp;
//     this.dispatchEvent(finishEvent);
//   }
// });

// //Tạo event tên finish --> Kéo 100%
// /*
// 1. Khởi tạo đối tượng event (Kèm theo tên event)
// 2. dispatchEvent ở element mong muốn

// 3. Lắng nghe event
// */

// range.addEventListener("finish", function (e) {
//   console.log(e.initialTimestamp);
//   output.innerText = "Hoàn thành";
// });

var range1 = document.querySelector(".range-1");
var range2 = document.querySelector(".range-2");
range1.addEventListener("finish", function (e) {
  console.log("ok chưa?");
  console.log(e);
});
range2.addEventListener("finish", function () {
  console.log("ok rồi");
});

//Lấy được nội dung
var contentEl = document.querySelector(".content");
var content = contentEl.innerText;

//Lưu nội dung vào bộ nhớ đệm --> Tạo đường dẫn xem được nội dung đó
var blob = new Blob([content]); //Lưu nội dung vào bộ nhớ đệm blob

var previewUrl = URL.createObjectURL(blob); //Khởi tạo URL từ lob

//Tạo anchor element (Thẻ a)
var a = document.createElement("a");
a.href = previewUrl;
a.download = "f8-blob.txt";
// a.innerText = "Download tại đây";

//Tạo button element
var btn = document.querySelector(".save-btn");
btn.addEventListener("click", function () {
  //   document.body.append(a);
  a.click(); //Trigger event
  //   var clickEvent = new Event("click");
  //   a.dispatchEvent(clickEvent);
});

/*
Trigger Event

1. Dùng các hàm có sẵn trong DOM
- click()
- submit()
- focus()

2. Dùng custom event (Áp dụng cho mọi event)
*/

var form = document.querySelector("form");

// window.addEventListener("load", function () {
//   //   form.submit();
//   form.children[0].focus();
// });

var inputEl = form.children[0];
var msgEl = form.querySelector(".msg");
var changeEvent = new Event("change");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  inputEl.value = "Học JS";
  inputEl.dispatchEvent(changeEvent); //Trigger Event
});

var setBtn = document.querySelector(".btn");
setBtn.addEventListener("click", function () {
  var randomValue = Math.random();
  inputEl.value = randomValue;
  inputEl.dispatchEvent(changeEvent); //Trigger Event
});

inputEl.addEventListener("change", function () {
  msgEl.innerText = this.value;
});
