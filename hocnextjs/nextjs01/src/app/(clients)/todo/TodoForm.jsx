"use client";
import { useEffect, useRef, useState } from "react";
import { handleSubmit } from "./action";
import { useRouter } from "next/navigation";
export default function TodoForm() {
  const formRef = useRef();
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("success");
  const { push } = useRouter();
  return (
    <form
      ref={formRef}
      action={async (form) => {
        const { status, message } = await handleSubmit(form);
        if (status) {
          formRef.current.reset();
          setMsg("Thêm thành công");
          setMsgType("success");
          // push("/todo");
        } else {
          setMsg(message);
          setMsgType("danger");
        }
      }}
    >
      <input type="text" name="title" />
      <button type="submit">Add Todo</button>
      {msg && <span className={`text-${msgType}`}>{msg}</span>}
    </form>
  );
}
