import React from "react";

export default function UsdToVnd({ onChange, usd }) {
  return (
    <div>
      <label htmlFor="usd">USD</label>
      <input type="number" id="usd" onChange={onChange} value={usd} />
    </div>
  );
}
