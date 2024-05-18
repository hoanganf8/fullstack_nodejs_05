import React, { useState } from "react";

export default function VndToUsd({ onChange, vnd }) {
  return (
    <div>
      <label htmlFor="vnd">VND</label>
      <input type="number" id="vnd" onChange={onChange} value={vnd} />
    </div>
  );
}

//a = () => {}
//b = a
//c = b;
//c()
