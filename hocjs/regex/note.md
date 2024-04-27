# Biểu thức chính quy

- Biểu thức xử lý chuỗi dựa vào các ký hiệu
- 3 chức năng chính

* So khớp --> Khớp chuỗi thỏa mãn điều kiện của biểu thức
* Cắt chuỗi --> Cắt chuỗi thỏa mãn điều kiện của biểu thức
* Thay thế --> Thay thế biểu thức thành 1 chuỗi mới

- Học các ký hiệu phù hợp với 3 chức năng trên
- Biểu thức của các ngôn ngữ lập trình là như nhau

Để áp dụng được biểu thức, trong JS tạo ra 1 object pattern

Cấu tạo của 1 pattern: /regex/modifier

- regex: Biểu thức xử lý chuỗi
- modifier: Cấu hình cho biểu thức

* g --> Khớp cả chuỗi
* i --> Không phân biệt hoa thường
* u --> Hỗ trợ tiếng việt (Unicode)
* m
* s

# Các hàm xử lý

- So khớp: pattern.test(string)
- Cắt chuỗi: string.match(pattern)
- Thay thế: string.replace(pattern)

# Các ký hiệu cơ bản

- string --> Khớp chuỗi string
- ^ --> Khớp biểu thức ở đầu chuỗi
- $ --> Khớp biểu thức cuối chuỗi
- [a-z] --> Khớp chữ thường
- [A-Z] --> Khớp chữ hoa
- [0-9] --> Khớp số
- [charlist] --> Khớp các ký tự ([abc])
  ==> Các biểu thức viết trong 1 cặp [] sẽ kết hợp theo điều kiện hoặc

[A-Za-z0-9abc] --> Chữ hoa hoặc chữ thường hoặc số hoặc 3 ký tự a, b, c

Mặc định độ dài các biểu thức là 1, muốn tăng độ dài --> Thêm biểu thức độ dài

{min,max} --> Từ min đến max
{min,} --> Từ min đến vô hạn
{value} --> Độ dài cố định

Các ký hiệu viết tắt của độ dài

```
+ ==> {1,}
? ==> {0,1}
* ==> {0,}
```

Lưu ý: Nếu gặp phải các ký hiệu biểu thức chính quy trùng với chuỗi cần so khớp --> Thêm ký hiệu escape (\) phía trước

Ví dụ:

- Kiểm tra trong chuỗi xem có [ hay không?
- Kiêm tra trong chuỗi có dấu . hay không?

Hoặc (|) và phủ định (^)

Lưu ý: Khi sử dụng | phải nhóm vào cặp ngoặc () để kết quả chính xác

Các ký hiệu viết tắt khác

```
\d --> Đại diện cho số
\D --> Không phải là số (Ngược lại của \d)
\w --> [a-zA-Z0-9-]
\W --> Ngược lại của \w
\s --> Đại diện cho khoảng trắng
\S --> Không phải khoảng trắng
```
