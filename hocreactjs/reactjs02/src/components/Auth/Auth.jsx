import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useDispatch, useSelector } from "../../store/hook";
import { useEffect } from "react";
import { profileRequest } from "../../request/loginRequest";
export default function Auth() {
  const profileApi = `https://api.escuelajs.co/api/v1/auth/profile`;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const { access_token: accessToken } = JSON.parse(
        localStorage.getItem("login_token")
      );
      if (accessToken) {
        dispatch({ type: "auth/set_user" });
        profileRequest(profileApi, accessToken)
          .then((response) => {
            dispatch({ type: "auth/set_user_profile", payload: response });
            if (!response) {
              localStorage.removeItem("login_token");
              dispatch({ type: "auth/set_user", payload: false });
            }
          })
          .finally(() => {
            dispatch({ type: "auth/set_user_loading", payload: false });
          });
      }
    } catch (e) {
      console.log(e);
    }
  }, [dispatch, isAuthenticated, profileApi]);

  if (isLoading) return <h2>Loading...</h2>;

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
