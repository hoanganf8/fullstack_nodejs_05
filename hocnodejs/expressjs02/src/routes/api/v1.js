const express = require("express");
const userController = require("../../controllers/api/v1/user.controller");
const loginController = require("../../controllers/api/v1/auth/login.controller");
const authApiMiddleware = require("../../middlewares/auth-api.middleware");
const roleController = require("../../controllers/api/v1/role.controller");
const userRoleController = require("../../controllers/api/v1/user_role.controller");
const permissionMiddleware = require("../../middlewares/permission.middleware");
const router = express.Router();

//Cập nhật quyền
router.get("/admin/roles", roleController.index);
router.get("/admin/roles/:id", roleController.find);
router.post("/admin/roles", roleController.create);
router.patch("/admin/roles/:id", roleController.update);
router.delete("/admin/roles/:id", roleController.destroy);
router.get("/admin/users/:id/roles", userRoleController.roles); //Trả về danh sách roles của 1 user
router.patch("/admin/users/:id/roles", userRoleController.update); //Cập nhật role cho 1 user
router.delete("/admin/users/:id/roles", userRoleController.destroy); //Xóa role của 1 user

router.post("/auth/login", loginController.login);
router.post("/auth/refresh-token", loginController.refreshToken);
router.post("/auth/revoke-token", loginController.revokeToken);
router.use(authApiMiddleware);
router.get("/users", permissionMiddleware("users.read"), userController.index);
router.get(
  "/users/:id",
  permissionMiddleware("users.read"),
  userController.find
);
router.post(
  "/users",
  permissionMiddleware("users.create"),
  userController.create
);
router.patch(
  "/users/:id",
  permissionMiddleware("users.update"),
  userController.update
);
router.get("/auth/profile", loginController.profile);
router.post("/auth/logout", loginController.logout);

module.exports = router;
