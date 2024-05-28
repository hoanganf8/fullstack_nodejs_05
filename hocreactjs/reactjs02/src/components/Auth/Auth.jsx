import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useSelector } from "../../store/hook";
export default function Auth() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuthenticated);
  return (
    <div className="container">
      <h1 className="text-center">Hello anh em F8</h1>
      {isAuthenticated ? <Dashboard /> : <Login />}
    </div>
  );
}

//Kiểm tra trạng thái login
//- Đã login ==> Gọi component Dashboard
// - Hiển thị thông tin user đã đăng nhập và nút đăng xuất
// - Xây dựng chức năng đăng xuất
//- Chưa login ==> Gọi component Login
// - Xử lý chức năng login
