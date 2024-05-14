import React, { forwardRef, useImperativeHandle, useRef, memo } from "react";

function Input(props, ref) {
  console.log("input re-render");
  //Tạo ref nội bộ
  const inputRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      const obj = {
        focus: () => inputRef.current.focus(),
      };
      Object.defineProperty(obj, "value", {
        set: function (val) {
          inputRef.current.value = val;
        },
        get: function () {
          return inputRef.current.value;
        },
      });
      Object.defineProperty(obj, "className", {
        set: function (val) {
          inputRef.current.className = val;
        },
        get: function () {
          return inputRef.current.className;
        },
      });
      return obj;
    },
    []
  );
  return (
    <div>
      <input
        type="text"
        placeholder="Họ tên"
        ref={inputRef}
        className="input-text"
      />
    </div>
  );
}

export default memo(forwardRef(Input));

//forwardRef: Chuyển từ ref từ component này sang component khác
//forwardRef: Higher Order Component (HOC)

/*
Khi component cha bị re-render ==> Component con sẽ tự động re-render

//HOC: React.memo() --> Ngăn tình trạng component con bị re-render không cần thiết
*/
