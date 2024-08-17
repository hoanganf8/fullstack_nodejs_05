export default function EditPage({ params }) {
  const { id } = params;
  return (
    <div>
      <h1>Cập nhật người dùng</h1>
      <form>
        <div>
          <input type="text" name="fullname" placeholder="Tên..." required />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email..." required />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu..."
            required
          />
        </div>
        <div>
          <input type="checkbox" name="status" value={true} /> Kích hoạt
        </div>
        <button>Cập nhật</button>
      </form>
    </div>
  );
}
