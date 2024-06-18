"use server";

import { revalidateTag } from "next/cache";

export const handleSubmit = async (form) => {
  const title = form.get("title");
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
    return true;
  }
  return false;
};
