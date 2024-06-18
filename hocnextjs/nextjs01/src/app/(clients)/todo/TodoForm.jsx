"use client";
import { useEffect, useRef, useState } from "react";
import { handleSubmit } from "./action";
export default function TodoForm() {
  const formRef = useRef();
  const [msg, setMsg] = useState("");
  return (
    <form
      ref={formRef}
      action={async (form) => {
        const status = await handleSubmit(form);
        if (status) {
          formRef.current.reset();
          setMsg("Thêm thành công");
        }
      }}
    >
      <input type="text" name="title" />
      <button type="submit">Add Todo</button>
      {msg && <span className="text-success">{msg}</span>}
    </form>
  );
}
