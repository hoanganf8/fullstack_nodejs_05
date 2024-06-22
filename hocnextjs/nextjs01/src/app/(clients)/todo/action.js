"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const handleSubmit = async (form) => {
  const title = form.get("title");
  //Validate
  if (!title) {
    return { status: false, message: "Vui lòng nhập tên" };
  }
  const res = await fetch("http://localhost:4000/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
    }),
  });
  if (res.ok) {
    revalidateTag("todo-list");
    // redirect("/todo");
    return { status: true };
  }
  return { status: false, message: "Đã có lỗi xảy ra" };
};

export const handleUpdateTodo = async (form) => {
  const title = form.get("title");
  const id = form.get("id");
  if (!title) {
    return { status: false, message: "Vui lòng nhập tên" };
  }
  const res = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
    }),
  });
  if (res.ok) {
    revalidateTag("todo-list");
    return { status: true };
  }
  return { status: false, message: "Đã có lỗi xảy ra" };
};
