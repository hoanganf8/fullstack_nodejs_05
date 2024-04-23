const express = require("express");
const app = express();
const port = 3000;
var morgan = require("morgan");
app.use(morgan());

app.get("/", (req, res) => {
  res.set("Set-Cookie", "email=hoangan;max-age=60;HttpOnly");
  res.send("Hello World!");
});

app.get("/read-cookie", (req, res) => {
  const cookies = req.get("cookie");
  console.log(cookies);
  res.send("Đọc cookie");
});

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://127.0.0.1:49696");
  res.set("Access-Control-Allow-Headers", "x-api-key,Authorization");
  res.set("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/api/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 2",
    },
    {
      id: 3,
      name: "User 3",
    },
  ];
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
