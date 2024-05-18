import React, { useState } from "react";
import VndToUsd from "./VndToUsd";
import UsdToVnd from "./UsdToVnd";

export default function ConvertMoney() {
  const [vnd, setVnd] = useState(0);
  const [usd, setUsd] = useState(0);
  //log dữ liệu từ component VndToUsd
  const handleChangeVnd = (e) => {
    const vnd = e.target.value;
    //Chuyển đổi từ vnd -> usd
    const usd = vnd / 25000;
    setUsd(usd);
    setVnd(vnd);
  };
  const handleChangeUsd = (e) => {
    const usd = e.target.value;
    //Chuyển đổi từ usd -> vnd
    const vnd = usd * 25000;
    setVnd(vnd);
    setUsd(usd);
  };
  return (
    <>
      <VndToUsd onChange={handleChangeVnd} vnd={vnd} />
      <UsdToVnd onChange={handleChangeUsd} usd={usd} />
    </>
  );
}

/*
ConvertMoney
    - VndToUsd --> Đẩy dữ liệu từ component con lên component cha khi người dùng change input
    - UsdToVnd

//A => B => C => D    
*/
