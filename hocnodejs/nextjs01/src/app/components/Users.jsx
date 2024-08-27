"use client";

import { useEffect, useState } from "react";

const getUsers = async (token) => {
  const response = await fetch(
    `${process.env.SERVER_API}/api/v1/users?_limit=5`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.json();
};
export default function Users({ token, permissions }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    getUsers(token)
      .then(({ data, success, errors }) => {
        if (!success) {
          setErrors(errors);
        } else {
          setUsers(data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (errors) {
    return <h3>Đã có lỗi xảy ra</h3>;
  }
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      {permissions.includes("users.create") && <button>Thêm mới</button>}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.fullname}</h3>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}
