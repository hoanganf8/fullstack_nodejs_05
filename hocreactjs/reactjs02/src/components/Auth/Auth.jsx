import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
export default function Auth() {
  return (
    <div className="container">
      <h1 className="text-center">Hello anh em F8</h1>
      {/* <Login /> */}
      <Dashboard />
    </div>
  );
}

//Kiểm tra trạng thái login
//- Đã login ==> Gọi component Dashboard
// - Hiển thị thông tin user đã đăng nhập và nút đăng xuất
// - Xây dựng chức năng đăng xuất
//- Chưa login ==> Gọi component Login
// - Xử lý chức năng login
