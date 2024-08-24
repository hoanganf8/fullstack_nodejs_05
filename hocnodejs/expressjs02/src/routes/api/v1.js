const express = require("express");
const userController = require("../../controllers/api/v1/user.controller");
const loginController = require("../../controllers/api/v1/auth/login.controller");
const authApiMiddleware = require("../../middlewares/auth-api.middleware");
const roleController = require("../../controllers/api/v1/role.controller");
const router = express.Router();
router.get("/users", userController.index);
router.get("/users/:id", userController.find);
router.post("/users", userController.create);
router.patch("/users/:id", userController.update);

//Cập nhật quyền
router.get("/admin/roles", roleController.index);
router.get("/admin/roles/:id", roleController.find);
router.post("/admin/roles", roleController.create);
router.patch("/admin/roles/:id", roleController.update);

router.post("/auth/login", loginController.login);
router.post("/auth/refresh-token", loginController.refreshToken);
router.post("/auth/revoke-token", loginController.revokeToken);
router.use(authApiMiddleware);
router.get("/auth/profile", loginController.profile);
router.post("/auth/logout", loginController.logout);

module.exports = router;
