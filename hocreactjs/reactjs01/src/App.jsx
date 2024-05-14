import React, { useEffect, useRef, useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [count, setCount] = useState(0);
  //   const myObj = useRef(0);
  //   const inputRef = useRef();
  //   const handleClick = () => {
  //     setCount(count + 1);
  //     myObj.current++;
  //   };
  //   useEffect(() => {
  //     // inputRef.current.focus();
  //   }, []);

  const data = ["Checkbox 1", "Checkbox 2", "Checkbox 3", "Checkbox 4"];
  const checkItemsRef = useRef([]);
  const checkAllRef = useRef();
  const checkCountRef = useRef(0);
  const inputRef = useRef();
  const handleCheckAll = ({ target }) => {
    const status = target.checked;
    checkItemsRef.current.forEach((checkItem) => {
      checkItem.checked = status;
    });
    checkCountRef.current = status ? checkItemsRef.current.length : 0;
  };
  const handleCheckItem = ({ target }) => {
    const status = target.checked;
    if (status) {
      checkCountRef.current++;
    } else {
      checkCountRef.current--;
    }
    checkAllRef.current.checked =
      checkCountRef.current === checkItemsRef.current.length;
  };

  //   useEffect(() => {
  //     console.dir(inputRef.current);
  //     inputRef.current.focus();
  //     inputRef.current.value = "Hello anh em F8";
  //     console.log(inputRef.current.value);
  //     console.log(inputRef.current.className);
  //     inputRef.current.className = "input-text-2";
  //   }, []);
  console.log("App re-render");
  return (
    <div>
      {/* <h1>Count: {count}</h1>
      <h2>Count2: {myObj.current}</h2>
      <button onClick={handleClick}>Click me</button>
      <hr />
      <input type="text" ref={inputRef} /> */}
      <div>
        <label>
          <input type="checkbox" onChange={handleCheckAll} ref={checkAllRef} />{" "}
          Check All
        </label>
      </div>
      {data.map((item, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              ref={(ref) => {
                checkItemsRef.current.push(ref);
              }}
              onChange={handleCheckItem}
            />
            {item}
          </label>
        </div>
      ))}
      <Input count={count} ref={inputRef} />
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

//Refs
/*
- Chức năng của React dùng để tham chiếu
- Giữ nguyên kết quả gần nhất khi bị re-render
- Tham chiếu tới các React Element để trả về DOM Element
- Có thay đổi trực tiếp
- Khi ref thay đổi ==> Component không bị re-render
==> Ref đơn giản là 1 object thuần túy

Trong class component ==> Sử dụng React.createRef để tạo ref
Trong functional Component ==> Sử dụng Hook useRef()

Buổi sau: 
- Context và Hook useContext
- Hook useReducer (Yêu cầu ôn tập lại vòng lặp reduce)
*/
