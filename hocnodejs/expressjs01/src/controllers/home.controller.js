module.exports = {
  index: (req, res, next) => {
    const title = "<i>F8 - Trang chủ</i>";
    const subTitle = "Hoàng An";
    const users = ["User 1", "User 2", "User 3", "User 4"];
    const status = false;
    // something();
    // try {
    //   const a = 0;
    //   if (!a) {
    //     const error = new Error("a phải là số dương");
    //     error.status = 400;
    //     throw error;
    //   }
    // } catch (e) {
    //   return next(e);
    // }

    // return next(new Error("a phải là số dương"));
    // console.log(req.cookies); //Đọc cookie
    // res.cookie("email", "hoangan.web@gmail.com", {
    //   path: "/",
    //   maxAge: 86400,
    //   httpOnly: true,
    // }); //Set cookie
    // res.clearCookie(); //Xóa tất cả cookie
    // res.cookie("email", "", {
    //   expires: new Date(),
    // }); //Xóa 1 cookie
    //Thêm session
    req.session.message = "Học lập trình không khó";
    res.render("home/index", { title, subTitle, users, status });
  },
};
