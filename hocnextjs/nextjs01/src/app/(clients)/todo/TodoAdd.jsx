"use client";

import { clearCache } from "@/utils/cache";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TodoAdd() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      setTitle("");
      //Xóa cache
      clearCache("todo-list");
      router.refresh();
    }
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={title} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

// revalidateTag('tag') --> Xóa cache theo tag (Đặt tag ở fetch)
// revalidatePath('/path') --> Xóa cache cả trang (Theo đường dẫn)
// Có điều kiện: Chỉ hoạt động ở route handler và server action
