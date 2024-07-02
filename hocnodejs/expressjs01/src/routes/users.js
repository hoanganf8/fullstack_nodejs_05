const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  const keyword = req.query.keyword;
  res.send(`
    <h1>Danh sách người dùng</h1>
    <h2>Từ khóa: ${keyword}</h2>
    `);
});
router.get("/add", (req, res) => {
  res.send(`
    <h1>Thêm người dùng</h1>
    <form action="" method="post">
        <input type="text" name="name" />
        <button>Submit</button>
    </form>
    `);
});
router.post("/add", (req, res) => {
  const { name } = req.body;
  console.log(name);
  res.send("Submit ok");
});
router.get("/view/:id", (req, res) => {
  const id = req.params.id;
  res.send("<h1>Xem người dùng: " + id + "</h1>");
});

module.exports = router;
