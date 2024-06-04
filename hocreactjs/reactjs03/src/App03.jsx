import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux_toolkit/slice/counterSlice";
export default function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment(10));
  };
  const handleDecrement = () => {
    dispatch(decrement(5));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
