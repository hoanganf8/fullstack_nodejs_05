"use client";

import { useEffect, useState } from "react";

const getUsers = async () => {
  const response = await fetch(`${process.env.SERVER_API}/api/v1/users`, {
    headers: {
      "x-api-key": "f8-training",
    },
  });
  return response.json();
};
export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  useEffect(() => {
    getUsers()
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
