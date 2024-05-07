import React from "react";

export default function Header({ title, content, name, email, age }) {
  return (
    <header>
      <h1>Header: {title}</h1>
      <p>{content}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </header>
  );
}
