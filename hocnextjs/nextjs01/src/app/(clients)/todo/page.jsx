import Link from "next/link";
import React from "react";
import Message from "./Message";
const getTodoList = async () => {
  const res = await fetch(`http://localhost:4000/todos`, {
    cache: "force-cache",
    next: {
      tags: ["todo-list"],
    },
  });
  return res.json();
};
export default async function TodoPage({ searchParams }) {
  const todoList = await getTodoList();
  const success = searchParams.success;
  return (
    <div>
      <h1>Todo List App</h1>
      <Link href={"/todo/create"} className="btn btn-primary btn-sm">
        Add Todo
      </Link>
      {success === "1" && <Message msg="Xóa thành công" />}
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <Link
              href={`/todo/edit/${todo.id}`}
              className="btn btn-warning btn-sm"
            >
              Sửa
            </Link>
            <Link
              href={`/todo/delete/${todo.id}`}
              className="btn btn-danger btn-sm"
            >
              Xóa
            </Link>
          </li>
        ))}
      </ul>
      {/* <TodoAdd /> */}
    </div>
  );
}
