import { useLayoutEffect, useState } from "react";
import Content from "./components/Content";

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  // console.log("App render");
  useLayoutEffect(() => {
    if (count === 5) {
      setCount(0);
    }
  }, [count]);
  return (
    <div>
      <h1>Hello anh em: {count}</h1>
      <button onClick={handleClick}>Click</button>
      <Content />
    </div>
  );
}

//Component cha re-render ==> Component con tự động re-render

/*
useEffect:
1. state thay đổi
2. component re-render
3. UI update
4. cleanup
5. callback useEffect

useLayoutEffect:
1. state thay đổi
2. component re-render
3. cleanup
4. callback useEffect
5. UI update
*/
