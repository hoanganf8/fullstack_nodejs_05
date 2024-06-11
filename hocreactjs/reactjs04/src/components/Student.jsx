import styled from "styled-components";
import { useState, useTransition } from "react";
import students from "../db.json";
// import { startTransition } from "react";

export default function Student() {
  const [keyword, setKeyword] = useState("");
  const [pending, startTransition] = useTransition();
  const handleSearch = (e) => {
    startTransition(() => {
      setKeyword(e.target.value);
    });
  };
  const Loading = styled.h4`
    color: red;
  `;
  return (
    <div>
      <input type="search" placeholder="Từ khóa..." onChange={handleSearch} />
      {pending && <Loading>Loading...</Loading>}
      {students.map(({ id, fullName }) => {
        if (keyword) {
          const pos = fullName.toLowerCase().indexOf(keyword.toLowerCase());
          if (pos !== -1) {
            return (
              <h3 key={id}>
                {fullName.slice(0, pos)}
                <span style={{ background: "yellow" }}>
                  {fullName.slice(pos, pos + keyword.length)}
                </span>
                {fullName.slice(pos + keyword.length)}
              </h3>
            );
          }
        }

        return <h3 key={id}>{fullName}</h3>;
      })}
    </div>
  );
}
