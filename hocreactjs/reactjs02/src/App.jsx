import { useReducer } from "react";

export default function App() {
  const initialState = {
    count: 0,
  };
  const reducer = (prev, current) => {
    return { ...prev, count: prev.count + current };
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //Event hanlder
  const handleClick = () => {
    dispatch(5);
  };
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleClick}>Click me</button>
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
