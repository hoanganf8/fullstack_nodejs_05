import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorObj = {};
    const { name, email } = form;
    if (!name) {
      errorObj.name = "Vui lòng nhập tên";
    }
    if (!email) {
      errorObj.email = "Vui lòng nhập email";
    }
    setErrors(errorObj);
    if (!Object.keys(errorObj).length) {
      //Không xảy ra lỗi
      //Thêm dữ liệu mới vào state users
      const user = {
        name,
        email,
      };
      setUsers([user, ...users]);
      setForm({}); //reset form
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const handleRemove = (index) => {
    if (window.confirm("Bạn có chắc chắn?")) {
      setUsers(users.filter((user, _index) => index !== _index));
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên</label>
          <input
            type="text"
            name="name"
            placeholder="Tên..."
            onChange={handleChange}
            value={form.name ?? ""}
          />
          {errors.name}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email..."
            onChange={handleChange}
            value={form.email ?? ""}
          />
          {errors.email}
        </div>
        <button>Submit</button>
      </form>
      <hr />
      {users.map(({ name, email }, index) => (
        <div key={index} style={{ borderBottom: "1px solid red" }}>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <button onClick={() => handleRemove(index)}>Xóa</button>
        </div>
      ))}
    </div>
  );
}
