module.exports = {
  index: (req, res) => {
    const title = "<i>F8 - Trang chủ</i>";
    const subTitle = "Hoàng An";
    const users = ["User 1", "User 2", "User 3", "User 4"];
    const status = false;
    res.render("home/index", { title, subTitle, users, status });
  },
};
