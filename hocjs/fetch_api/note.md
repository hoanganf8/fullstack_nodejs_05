# API

- Application Programming Interface
- Giao diện lập trình ứng dụng
- Cho phép các ứng dụng giao tiếp với nhau

* Web với Web
* Web với App
* Ứng dụng Thư viện
* Ứng dụng với hệ điều hành
  ...

Web API: Có rất nhiều chuẩn thiết kế, tuy nhiên phổ biến nhất là RESTful API

Người sử dụng API không cần quan tâm đến bên trong được xây dựng như thế nào

Chỉ cần quan tâm đến Input và Output

Ví dụ:

```js
const [count, setCount] = useState(0);
```

Chỉ cần biết hàm useState() có 1 đối số và trả về 1 mảng, tác dụng nó là gì?

Web API có các thành phần sau:

- URL
- Method
- Request: Header, Body
- Response: Header, Body, Status

## Fake server bằng JSON Server

- URL: http://localhost:3000/tenkey
  Ví dụ: http://localhost:3000/users

1. Lấy dữ liệu

GET URL

2. Thêm dữ liệu lên Server

POST URL

Request:

- Header: Content-Type: application/json
- Body: JSON

## Authentication - Authorization

- Authentication: Xác thực xem bạn là ai?

- Authorization: Xác định bạn được làm gì? Không được làm gì?

## Các loại Authentication

1. Cookie-Based Authentication

- Request (Email, Password) ==> Server
- Server kiểm tra email và password có hợp lệ không?

* Hợp lệ --> Tạo session chứa thông tin user và lưu vào server, sau đó trả về 1 cookie (session cookie) có chứa session_id
* Không hợp lệ --> Trả về thông báo lỗi

- Request Authorization --> Trình duyệt gửi cookie lên Server (Chứa session_id) --> Server kiểm tra có tồn tại session_id không?

* Tồn tại: Xác định đúng phiên đăng nhập của user và trả về thông tin user
* Không tồn tại: Thông báo lỗi (Đăng xuất)

Vấn đề:

- Scale ứng dụng
- Hỗ trợ đa nền tảng --> Khó
- Ứng dụng nhiều domain khác nhau --> Khó
- Bảo mật: Dễ bị đánh cắp cookie

Ưu điểm:

- Dễ, triển khai nhanh
- Dung lượng session_id nhỏ
- Các framework back-end đều hỗ trợ

2. Token-Based Authentication

- Request (Email, Password) ==> Server
- Server kiểm tra email và password có hợp lệ không?

* Không hợp lệ --> Trả về thông báo lỗi
* Hợp lệ --> Lưu thông tin user vào token (jwt) --> Trả về trình duyệt

- Request Authorization --> Trình duyệt gửi header (Authorization) có chứa token --> Server sẽ giải mã xem có hợp lệ không?

* Hợp lệ: Truy vấn với Database để trả về dữ liệu cần
* Không hợp lệ: Thông báo lỗi

Ưu điểm:

- Dữ liệu lưu ở client (Token)
- Dễ mở rộng và hỗ trợ đa nền tảng vì chỉ cần thêm vào header
- An toàn hơn

Nhược điểm

- Kích thước lớn
- Nếu không cẩn thận với các thông tin đưa vào token --> Dễ bị tấn công XSS
- Khó triển khai, mất thời gian

## JWT

- Token được tạo ra --> Không xóa được (Trừ phi hết hạn)
- Server sẽ kiểm tra hợp lệ dựa vào chữ ký
- 1 token hợp lệ có 2 yếu tố

* Đúng chữ ký
* Còn hạn

- Từng phần trong JWT có thể decode (Bởi vì mã hóa bằng Base64)

## Làm thế khi token bị lộ?

Hạ thời gian sống xuống thấp nhất có thể --> Trải nghiệm

Giải pháp: Tạo ra refreshToken

Sinh ra 2 loại token sau khi xác thực

1. Access Token: Lấy tài nguyên trên Server

- Chỉ dùng để lấy tài nguyên
- Thời gian sống thấp

2. Refresh Token: Cấp lại access mới khi hết hạn

- Chỉ dùng cấp lại access mới
- Thời gian sống cao
- Lưu trữ thêm 1 bản trên server

## Vấn đề khi đăng xuất

## CORS

- Chính sách của trình duyệt --> Ngăn chặn truy cập trái phép
- CORS sẽ chặn ở những trường hợp nào?

* Origin: scheme + hostname + port
* Header
* Credentials

HTTP REQUEST ==> SERVER ==> XỬ LÝ ==> HTTP RESPONSE ==> Trình duyệt block không cho phép truy cập vào RESPONSE

Với các Request không phải simple request

HTTP Request ==> Trình duyệt dừng Request đó ==> Gửi Request Preflight để thăm dò ==> preflight sẽ trả về response

- TH1: preflight có response header thỏa mãn điều kiện --> Cho phép Request bị dừng chạy tiếp
- TH2: preflight có response header không thỏa mãn điều kiện --> Block request đang bị dừng
