import { useEffect } from "react";
import { useState } from "react";

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
export default function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isShow, setShow] = useState(true);
  const [error, setError] = useState(false);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const getUsers = async () => {
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  if (error) {
    return <h3>Đã có lỗi xảy ra</h3>;
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      {console.log("Update UI")}
      <button onClick={handleIncrement}>Click me</button>
      <button onClick={() => setShow(!isShow)}>Toggle</button>
      {isShow && (
        <>
          <h2>Users</h2>
          {isLoading ? (
            <h4>Loading...</h4>
          ) : (
            users.map(({ id, name }) => <h4 key={id}>{name}</h4>)
          )}
        </>
      )}
    </div>
  );
}

/*
Component: State thay đổi ==> Re-render
Phát sinh 1 số công việc bên ngoài sau khi state thay đổi ==> Thực hiện sau khi re-render

==> Side Effect

Hook xử lý các Side Effect
usEffect(callback, dependencies)

dependencies: Điều kiện để callback trong useEffect hoạt động
- [] ==> Hoạt động ngay sau khi component được render lần đầu tiên
- null hoặc undefined ==> Component re-render callback sẽ hoạt động
- [bien1, bien2, bien3,...] ==> 1 trong các biến thay đổi, callback sẽ hoạt động
*/
