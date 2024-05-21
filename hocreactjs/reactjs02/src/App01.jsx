import { useReducer } from "react";
import { reducer, initialState } from "./utils/reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //Event hanlder
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 5,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
      payload: 5,
    });
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

/*
1 số vấn đề khi quản lý state
- Logic update state xử lý luôn ở trong component (Thông qua event handler)
- Gặp khó khăn khi có quá nhiều state trong 1 component
- Kế thừa các logic update state (1 logic dùng ở nhiều component)

==> Tách logic update state ra 1 hàm khác
*/
