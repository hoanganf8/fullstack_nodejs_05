"use server";
import { cookies } from "next/headers";
const requestLogin = async (email, password) => {
  const response = await fetch(`${process.env.SERVER_API}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   "x-api-key": "abc",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
};
export const handleLogin = async (form) => {
  try {
    const { email, password } = Object.fromEntries(form);
    const { success, data } = await requestLogin(email, password);
    if (!success) {
      throw new Error("Login Failed");
    }
    cookies().set("token", data.accessToken, {
      maxAge: 3600,
      path: "/",
      httpOnly: true,
    });
    return { success };
  } catch (e) {
    return { success: false };
  }
};
