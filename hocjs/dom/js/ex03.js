//DOM HTML: Thao tác với thẻ html
/*
- Lấy nội dung của thẻ html
- Thay đổi nội dung của thẻ html
- Xóa thẻ html
- Thêm, sửa, xóa thuộc tính

1. element.innerText
Lấy nội dung của thẻ html (Chỉ lấy text)

2. element.innerHTML
Lấy nội dung của thẻ html (Bao gồm cả thẻ html)

3. element.textContent
Lấy nội dung thẻ html (Chỉ lấy text, giữ khoảng cách gốc)

4. element.outerHTML
Lấy nội dung thẻ html (Bao gồm cả html bên trong và chính nó)

5. element.outerText

Lưu ý: Nếu muốn cập nhật lại nội dung các thẻ html --> Dùng 5 thuộc tính trên và gán giá trị
*/
// var btn = document.querySelector(".btn");
// var title = document.querySelector(".title");
// btn.addEventListener("click", function () {
//   console.log(title.innerHTML);
// title.innerHTML = `
// Hello anh em &nbsp;&nbsp;&nbsp; <i>F8</i>
//                 <style>
// h1 {
//     color: red;
// }
// </style>
// `;
// title.outerText = '<span>Hello anh em F8</span>'
// });

var contentEl = document.querySelector('.content');
var btn = document.querySelector('.btn');
var content = contentEl.innerHTML;
btn.addEventListener('click', function() {
    if (!contentEl.innerHTML) {
        contentEl.innerHTML = content;
        btn.innerText = 'Ẩn';
    } else {
        contentEl.innerHTML = '';
        btn.innerText = 'Hiện';
    }
});

var removeBtn = document.querySelector('.remove-btn');
removeBtn.addEventListener('click', function() {
    contentEl.remove();
})