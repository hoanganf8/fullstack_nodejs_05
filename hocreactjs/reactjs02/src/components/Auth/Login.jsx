export default function Login() {
  const loginApi = `https://api.escuelajs.co/api/v1/auth/login`;
  const profileApi = `https://api.escuelajs.co/api/v1/auth/profile`;

  return (
    <div className="w-50 mx-auto">
      <h2 className="text-center">Đăng nhập</h2>
      <form action="">
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            placeholder="Email..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            placeholder="Mật khẩu..."
            name="password"
          />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
}
