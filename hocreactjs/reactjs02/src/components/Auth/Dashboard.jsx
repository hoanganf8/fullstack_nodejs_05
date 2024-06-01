import { useLogout } from "../../hook/useLogout";
import { useSelector } from "../../store/hook";

export default function Dashboard() {
  const user = useSelector((state) => state.auth.user);
  const { logout } = useLogout();
  return (
    <div>
      <h2>Chào mừng bạn quay trở lại</h2>
      <ul className="list-unstyled d-flex gap-3">
        <li>Chào bạn: {user.name}</li>
        <li>
          <a href="#" onClick={logout}>
            Đăng xuất
          </a>
        </li>
      </ul>
    </div>
  );
}
