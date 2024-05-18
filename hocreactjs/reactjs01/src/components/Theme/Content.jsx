import React, { useContext } from "react";
import { AppContext } from "../../App";

export default function Content() {
  const { setMessage } = useContext(AppContext);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempora
        corrupti obcaecati quis optio illum fugiat quod natus minus temporibus
        doloribus ipsam incidunt hic labore impedit, eum dolore aut expedita?
      </p>
      <button onClick={() => setMessage("Update nào anh em")}>Click me</button>
    </div>
  );
}
