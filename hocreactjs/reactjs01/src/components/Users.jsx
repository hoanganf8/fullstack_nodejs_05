import React, { useEffect } from "react";

export default function Users({ users, isLoading }) {
  useEffect(() => {
    console.log("Users Mounting");
    return () => {
      console.log("Users Unmouting");
    };
  }, []);
  return (
    <>
      <h2>Users</h2>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        users.map(({ id, name }) => <h4 key={id}>{name}</h4>)
      )}
    </>
  );
}
