import { redirect } from "next/navigation";
const addUser = async (data) => {
  const response = await fetch(`${process.env.SERVER_API}/api/v1/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.ok;
};
export default function CreatePage() {
  const handleSubmit = async (formData) => {
    "use server";
    const { fullname, email, password, status } = Object.fromEntries(formData);
    //fetch api create
    const insertStatus = await addUser({
      fullname,
      email,
      password,
      status: status === "true",
    });
    if (insertStatus) {
      redirect("/");
    }
  };
  return (
    <div>
      <h1>Thêm người dùng</h1>
      <form action={handleSubmit}>
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
        <button>Đăng ký</button>
      </form>
    </div>
  );
}
