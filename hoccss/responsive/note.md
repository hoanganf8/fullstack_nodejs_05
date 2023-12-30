# Responsive Web Design

## Khái niệm

- Thiết kế web đáp ứng
- Dựa vào kích thước trình duyệt, thiết bị để thay đổi giao diện tương thích với các thiết bị
- Ngoài Responsive, có thể dùng adaptive để thiết kế web đáp ứng

## Breakpoint

- Điểm dừng mà tại đó giao diện sẽ thay đổi (Kích thước màn hình)
- Ví dụ:

* 1400
* 1200
* 992
* 768
* 576

Lưu ý:

- Không có breakpoint cố định, chuẩn trong tất cả các dự án
- Breakpoint sẽ vào cấu trúc của dự án

Tip: Dựa vào các breakpoint phổ biến trên các CSS Framework rồi phát triển thêm

## Các trường phái Responsive

- Desktop First
- Mobile First --> Nên dùng

## Media Queries

- Dựa vào breakpoint để viết
- Dựa vào cách Responsive: Desktop first hay Mobile first

## Desktop First

```css
@media screen and (max-width: 1399px) {
  //Selector CSS
}

@media screen and (max-width: 1199px) {
  //Selector CSS
}

@media screen and (max-width: 991px) {
  //Selector CSS
}

@media screen and (max-width: 767px) {
  //Selector CSS
}

@media screen and (max-width: 575px) {
  //Selector CSS
}
```

Lưu ý: Viết đúng thứ tự media queries

## Mobile First

```css
@media screen and (min-width: 576px) {
  //Selector CSS
}

@media screen and (min-width: 768px) {
  //Selector CSS
}

@media screen and (min-width: 992px) {
  //Selector CSS
}

@media screen and (min-width: 1200px) {
  //Selector CSS
}

@media screen and (min-width: 1400px) {
  //Selector CSS
  body {
    color: red;
  }
}
```

Lưu ý: Viết đúng thứ tự media queries

## Meta Viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
