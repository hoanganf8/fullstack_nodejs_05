import { useDispatch, useSelector } from "react-redux";
export default function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => dispatch({ type: "counter/decrement", payload: 5 })}
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: "counter/increment", payload: 10 })}
      >
        +
      </button>
    </div>
  );
}
