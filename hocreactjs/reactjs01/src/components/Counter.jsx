import React, { useState } from "react";

export default function Counter(props) {
  //   props.title = "F88";
  //   console.log(props);
  //const [tenstate, hamSet] = useState(initialValue)
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    const stateCallback = (prevState) => {
      //   console.log(prevState);
      return prevState + 1;
    };
    setCount(stateCallback);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  //   console.log("render");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

/*
Re-Render
Repaint

DOM thật --> Thay đổi trực tiếp trên DOM thật

DOM ảo --> Sao chép từ DOM thật --> Khi component re-render so sánh DOM ảo với DOM thật xem chỗ nào khác nhau --> Cập nhật lại riêng chỗ đó
*/
