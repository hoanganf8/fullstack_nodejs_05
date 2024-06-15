"use client";
import { useEffect, useState } from "react";
export default function Comment({ comment }) {
  const [showBody, setShowBody] = useState(true);
  const handleToggleBody = () => {
    setShowBody(!showBody);
  };
  //   useEffect(() => {
  //     console.log(localStorage);
  //   }, []);
  return (
    <>
      {showBody && <p>Body: {comment[0].body}</p>}
      <button className="btn btn-info btn-sm" onClick={handleToggleBody}>
        {showBody ? "Rút gọn" : "Mở rộng"}
      </button>
    </>
  );
}
