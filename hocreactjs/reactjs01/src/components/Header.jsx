import React from "react";

export default function Header({
  title,
  content,
  name,
  email,
  age,
  children,
  onGetData,
}) {
  return (
    <header>
      <h1>Header: {title}</h1>
      <p>{content}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      {children}
      <button onClick={() => onGetData("Hello anh em F8")}>Click me</button>
    </header>
  );
}

//Cha => Qua props => Con

/*
const a = () => {}
const b = a;
const c = b;
const d = c;
d() --> a()
*/
