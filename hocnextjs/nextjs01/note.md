# Page - Layout

- 1 page tương ứng 1 trang ==> Chỉ có 1 đường dẫn tương ứng với nó
- 1 layout có thể có nhiều trang ==> 1 layout có thể có nhiều đường dẫn

Request (Truy cập URL) ==> RootLayout ==> Layout ==> Page ==> Response (HTML)

Lưu ý: Mặc định NextJS render theo cơ chế Server-Side

# Router trong NextJS

- Không khai báo route
- Dựa vào folder, file (filesystem router)

# Middleware

Request (Truy cập URL) ==> Middleware ==> RootLayout ==> Layout ==> Page ==> Response (HTML)

# Route Handler

- Cho phép tạo ra các API (Xây dựng back-end)
- Trả về json thay vì trả về jsx
