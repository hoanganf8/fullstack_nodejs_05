//Trong express ==> middleware là 1 function
module.exports = (req, res, next) => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return res.redirect("/auth/login");
  }
  req.user = "Hoàng An F8";
  next(); //Cho phép request đi tiếp
};
