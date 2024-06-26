import React, { Fragment } from "react";
import Header from "./components/Header";
import HeaderInner from "./components/HeaderInner";

export default function App() {
  // const handleClick = (e) => {
  //   console.log("Click me");
  //   console.log(e);
  // };
  // const handleClick2 = (text) => {
  //   console.log(text);
  // };
  const title = "F8 - Fullstack";
  const data = {
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
    age: 32,
  };
  const handleClick = (text) => {
    console.log(text);
  };
  return (
    <Fragment>
      <Header
        title={title}
        content="Hello anh em F8"
        {...data}
        onGetData={handleClick}
      >
        <HeaderInner title={"F8"} onGetData={handleClick} />
      </Header>
      {/* <h1
        style={{
          color: "red",
          fontStyle: "italic",
        }}
      >
        Học React không khó
      </h1>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={(e) => {
          handleClick2(e.target.innerText);
        }}
      >
        Click me 2
      </button> */}
    </Fragment>
  );
}

/*
- Render Props
- Children Props
- Prop Types
- State
*/
