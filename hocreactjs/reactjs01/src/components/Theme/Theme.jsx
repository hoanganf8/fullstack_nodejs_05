import "./Theme.css";
import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Content from "./Content";
import { AppContext } from "../../App";

export default function Theme() {
  const { theme } = useContext(AppContext);
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
