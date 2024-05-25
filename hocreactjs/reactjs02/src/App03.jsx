import { useContext } from "react";
import { ProviderContext } from "./store/Provider";

export default function App() {
  const {
    state: { count },
    dispatch,
  } = useContext(ProviderContext);
  const handleClick = () => {
    dispatch({ type: "counter/increment" });
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
