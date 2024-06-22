"use client";
import Link from "next/link";
import { handleUpdateTodo } from "./action";
import { useRef, useState } from "react";
export default function TodoUpdate({ todo }) {
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("success");
  return (
    <form
      action={async (form) => {
        form.append("id", todo.id);
        const { status, message } = await handleUpdateTodo(form);
        if (status) {
          setMsg("Cập nhật thành công");
          setMsgType("success");
        } else {
          setMsg(message);
          setMsgType("danger");
        }
      }}
    >
      <h2>Update Todo</h2>
      <input type="text" name="title" defaultValue={todo.title} />
      <button type="submit">Update Todo</button>
      <Link href="/todo">Cancel</Link>
      <div>{msg && <span className={`text-${msgType}`}>{msg}</span>}</div>
    </form>
  );
}
