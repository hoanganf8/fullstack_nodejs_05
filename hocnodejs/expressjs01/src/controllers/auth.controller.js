module.exports = {
  login: (req, res) => {
    const errors = req.flash("errors");
    res.render("auth/login", {
      layout: "auth/layout",
      errors: errors.length ? errors[0] : {},
    });
  },
  handleLogin: (req, res) => {
    //Lấy body từ request
    const { email, password } = req.body;
    const errors = {};
    //Kiểm tra điều kiện
    if (!email) {
      errors.email = "Vui lòng nhập email";
    }
    if (!password) {
      errors.password = "Vui lòng nhập mật khẩu";
    }
    //Thông báo lỗi
    if (Object.keys(errors).length) {
      req.flash("errors", errors);
      //Chuyển hướng về request trước đó
      return res.redirect("/auth/login");
    }
    //Gọi model user ==> Kiểm tra email và password hợp lệ
    //Lưu session hoặc trả về JWT
    res.send("validate ok");
  },
};
