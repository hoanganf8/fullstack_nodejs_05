const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const fs = require("fs"); //Đọc, ghi file
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const routerWeb = require("./routes/web");
const routerApi = require("./routes/api");
const authMiddleware = require("./middlewares/auth.middleware");
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
//Log file
app.use(
  morgan("common", {
    stream: fs.createWriteStream(__dirname + "/logs/access.log", {
      flags: "a",
    }),
  })
);
app.use(morgan("dev")); //Log terminal
app.use(express.static("public")); //Static folder public
app.use(cookieParser()); //Xử lý cookie
app.use(
  session({
    secret: "f8 expressjs01",
    resave: false,
    saveUninitialized: true,
    name: "f8-session",
  })
);
app.use(flash());
app.set("view engine", "ejs"); //setup engine
app.set("views", __dirname + "/views"); //setup đường dẫn folder chứa views
app.use(expressLayouts);
//app.method(path, handler);
//method: get, post, put, patch, delete
app.use(express.urlencoded({ extended: true }));
//name=Hoàng+An&email=hoangan.web@gmail.com
//application/x-www-form-urlencoded
app.use(express.json());
//{"name": "Hoàng An", "email": "hoangan.web@gmail.com"}
//application/json
//Đăng ký middleware
// app.use(authMiddleware);
app.use(routerWeb);
app.use("/api", routerApi);

//Xử lý lỗi 404
app.use((req, res, next) => {
  res.status(404);
  if (process.env.NODE_ENV === "production") {
    return res.render("errors/error-prod", {
      error: { status: 404 },
      layout: false,
    });
  }
  res.render("errors/error-dev", {
    error: "Không tìm thấy trang",
    layout: false,
  });
});

//Xử lý lỗi mặc định
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  if (process.env.NODE_ENV === "production") {
    return res.render("errors/error-prod", {
      error: { status: 500 },
      layout: false,
    });
  }
  res.render("errors/error-dev", { error: err, layout: false });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
