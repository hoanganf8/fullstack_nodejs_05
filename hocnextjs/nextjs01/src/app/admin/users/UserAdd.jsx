import { useState } from "react";
import { mutate } from "swr";
export default function UserAdd() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Vui lòng nhập tên");
      return;
    }
    addUser(name);
    setName("");
  };
  const handleChangeValue = (e) => {
    setName(e.target.value);
  };
  const addUser = async (name) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    if (res.ok) {
      mutate({ url: process.env.NEXT_PUBLIC_SERVER_API + `/users` });
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tên..."
          onChange={handleChangeValue}
          value={name}
        />
        <button>Thêm</button>
      </form>
    </div>
  );
}
