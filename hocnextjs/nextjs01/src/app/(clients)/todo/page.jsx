import React from "react";
import TodoAdd from "./TodoAdd";
import TodoForm from "./TodoForm";
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
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      {/* <TodoAdd /> */}
      <TodoForm />
    </div>
  );
}
