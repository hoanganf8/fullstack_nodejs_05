const express = require("express");
const userController = require("../../controllers/api/v1/user.controller");
const loginController = require("../../controllers/api/v1/auth/login.controller");
const router = express.Router();
router.get("/users", userController.index);
router.get("/users/:id", userController.find);
router.post("/users", userController.create);
router.patch("/users/:id", userController.update);

router.post("/auth/login", loginController.login);
router.get("/auth/profile", loginController.profile);
module.exports = router;
