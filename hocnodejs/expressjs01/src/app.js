const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const routerWeb = require("./routes/web");
const routerApi = require("./routes/api");
const port = 3000;
const app = express();
app.use(express.static("public")); //Static folder public
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
app.use(routerWeb);
app.use("/api", routerApi);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
