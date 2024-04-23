fetch(`http://localhost:3000/api/users`, {
  headers: {
    "x-api-key": "123",
    Authorization: `Bearer 123`,
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
