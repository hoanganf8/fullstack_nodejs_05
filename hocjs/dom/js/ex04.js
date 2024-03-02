//Thuộc tính
/*
1. Thuộc tính có sẵn
element.tenthuoctinh --> Lấy giá trị
element.tenthuoctinh = giatri --> Gán giá trị hoặc thêm thuộc tính mới

2. Thuộc tính tự tạo
- Giải quyết các bài toán sử dụng JS
- Không có tác dụng thay đổi giao diện html khi chưa có sự tác động của JS
- Bắt đầu: data-

Để đọc nội dung attribute: element.getAttribute(tenthuoctinh)

Để thay đổi hoặc thêm mới: element.setAttribute(tenthuoctinh, giatrithuoctinh)

Lưu ý: Hàm getAttribute, setAttribute áp dụng cho mọi thuộc tính (Bao gồm cả thuộc tính có sẵn)
*/
var a = document.querySelector('a');
// console.log(a.href);
// console.log(a.getAttribute('href'));
var title = document.querySelector('.title');
// console.log(title.id);
// console.log(title.className); //Thuộc tính class
// console.log(title.title);
// console.log(title.align);
// console.log(title.href);

// title.align = "center";
// title.className = 'hello';

// console.log([title]);

// var color = title.getAttribute('data-color');
// title.style = `color: ${color}`;

//Dataset
console.log(title.dataset.color); //data-color
console.log(title.dataset.animationDuration); //data-animation-duration

title.dataset.animationTimingFunction = 'linear';

//Xóa thuộc tính
// title.removeAttribute('data-color');
// delete title.dataset.color;
// delete title.id;

