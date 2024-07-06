const express = require("express");
const usersRouter = require("./users");
const homeController = require("../controllers/home.controller");
const pageController = require("../controllers/page.controller");
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();
router.get("/", homeController.index);
router.get("/gioi-thieu", pageController.about);
router.get("/auth/login", authController.login);
router.post("/auth/login", authController.handleLogin);

router.use(authMiddleware);

//Import users.js
router.use("/users", usersRouter);
router.get("/lien-he", pageController.contact);
module.exports = router;

/*
Cấu tạo controller
- Mỗi controller là 1 file
- Một controller tương ứng với 1 nhóm chức năng liên quan đến nhau:
+ Thêm sản phẩm
+ Hiển thị 
+ Sửa sản phẩm
+ Xóa sản phẩm 
==> Product Controller
- Trong controller sẽ có các chức năng nhỏ gọi là action

Controller => Action
*/
