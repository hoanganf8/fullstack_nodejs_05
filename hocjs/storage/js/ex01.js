//Storage
/*
Đặc điểm chung: Chỉ lưu trữ được text
1. localStorage
- Lưu trữ không giới hạn thời gian
- Dung lượng lớn hơn cookie:  Khoảng 10mb
- Dữ liệu trên 1 trang web sẽ phân biệt qua Origin
- Bảo mật kém

Hàm xử lý: 
- localStorage.setItem(key, value)
- localStorage.getItem(key)
- localStorage.removeItem(key)
- localStorage.clear()

2. sessionStorage
- Lưu trữ theo phiên (Tắt trình duyệt là mất)
- Dung lượng lớn hơn cookie:  Khoảng 10mb
- Dữ liệu trên 1 trang web sẽ phân biệt qua Origin
- Bảo mật kém

Hàm xử lý: 
- sessionStorage.setItem(key, value)
- sessionStorage.getItem(key)
- sessionStorage.removeItem(key)
- sessionStorage.clear()

3. cookie
- Dữ liệu cookie lưu ở client
- Server cũng get và set được cookie (HTTP Header)
- Client cũng get và set được cookie (Dùng JS)
- Dung lượng lưu trữ thấp: Khoảng 4KB
- Dữ liệu sẽ phân biệt theo path
- Dữ liệu có thể chia sẻ tới các subdomain
- Có 1 số nguyên tắc bảo mật: HttpOnly, Secure, Samesites,...
- Ở trình duyệt, mọi request đều được đính kèm header Cookie để server đọc được

Cấu tạo cookie: tencookie=giatricookie;expires=thoigian;path=duongdan;domain=tenmien;HttpOnly;Secure

Cách làm với Cookie ở Server

- Set Cookie: Trả về Header tên Set-Cookie: tencookie=giatricookie;expires=thoigian;path=duongdan;domain=tenmien;HttpOnly;Secure
- Get Cookie: Đọc Header Request tên Cookie

4. Blob (Web Worker)
*/

// document.cookie = `name=hoangan;expires=${new Date(
//   "2024-04-24 09:00:00"
// ).toUTCString()};path=/;domain=localhost`;

// console.log(document.cookie);

// document.cookie = `name=;expires=${new Date().toUTCString()};path=/`;
