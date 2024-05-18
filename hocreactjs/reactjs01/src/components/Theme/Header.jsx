import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function Header() {
  const { message, theme, setTheme } = useContext(AppContext);
  return (
    <div>
      <h2>Header F8</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <h3>{message}</h3>
    </div>
  );
}
