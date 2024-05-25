# State trong React

- Local State: State trong 1 component
- Global State: State mà bất kỳ component nào cũng truy cập được

Giải pháp:

- Thư viện: Redux,...
- Context API + useReducer

Trong React cho phép tạo Hook riêng (Custom Hook)

- Có thể gọi các Hook khác
- Ràng buộc của 1 React Hook (Chỉ được gọi trong function component hoặc custom hook)
- Dễ dàng kế thừa logic

Làm thế nào để tạo React Hook

==> Tạo 1 hàm bắt đầu bằng từ khóa use
