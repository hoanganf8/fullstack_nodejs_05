"use client";
import { useState } from "react";
import { handleLogin } from "./action";
import { useRouter } from "next/navigation";
export default function Form() {
  const router = useRouter();
  const [msg, setMsg] = useState();
  return (
    <form
      action={async (form) => {
        const { success } = await handleLogin(form);
        if (!success) {
          setMsg("Email hoặc mật khẩu không chính xác");
          return;
        }
        router.push("/");
      }}
    >
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">Login</button>
      {msg && <p>{msg}</p>}
    </form>
  );
}
