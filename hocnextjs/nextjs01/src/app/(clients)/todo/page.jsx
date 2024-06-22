import Link from "next/link";
import React from "react";
const getTodoList = async () => {
  const res = await fetch(`http://localhost:4000/todos`, {
    cache: "force-cache",
    next: {
      tags: ["todo-list"],
    },
  });
  return res.json();
};
export default async function TodoPage() {
  const todoList = await getTodoList();
  return (
    <div>
      <h1>Todo List App</h1>
      <Link href={"/todo/create"} className="btn btn-primary btn-sm">
        Add Todo
      </Link>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <Link href="#" className="btn btn-warning btn-sm">
              Sửa
            </Link>
          </li>
        ))}
      </ul>
      {/* <TodoAdd /> */}
    </div>
  );
}
