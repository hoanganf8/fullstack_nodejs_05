import { notFound, redirect } from "next/navigation";
const getUser = async (id) => {
  const response = await fetch(`${process.env.SERVER_API}/api/v1/users/${id}`, {
    cache: "no-cache",
  });
  return response.json();
};
const updateUser = async (id, data) => {
  const response = await fetch(`${process.env.SERVER_API}/api/v1/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.ok;
};
export default async function EditPage({ params }) {
  const { id } = params;
  const { success, data: user } = await getUser(id);
  if (!success) {
    return notFound();
  }
  const handleSubmit = async (formData) => {
    "use server";
    const { fullname, email, password, status } = Object.fromEntries(formData);
    const updateStatus = await updateUser(id, {
      fullname,
      email,
      password,
      status: status === "true",
    });
    if (updateStatus) {
      redirect("/");
    }
  };
  return (
    <div>
      <h1>Cập nhật người dùng</h1>
      <form action={handleSubmit}>
        <div>
          <input
            type="text"
            name="fullname"
            placeholder="Tên..."
            defaultValue={user.fullname}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            defaultValue={user.email}
          />
        </div>
        <div>
          <input type="password" name="password" placeholder="Mật khẩu..." />
        </div>
        <div>
          <input
            type="checkbox"
            name="status"
            value={true}
            defaultChecked={user.status}
          />
          Kích hoạt
        </div>
        <button>Cập nhật</button>
      </form>
    </div>
  );
}
