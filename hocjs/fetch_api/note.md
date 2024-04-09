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
