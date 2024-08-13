export default function page() {
  return (
    <div>
      <h1>Thêm người dùng</h1>
      <form action="">
        <div>
          <input type="text" name="fullname" placeholder="Tên..." />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email..." />
        </div>
        <div>
          <input type="password" name="password" placeholder="Mật khẩu..." />
        </div>
        <div>
          <input type="checkbox" /> Kích hoạt
        </div>
        <button>Đăng ký</button>
      </form>
    </div>
  );
}
