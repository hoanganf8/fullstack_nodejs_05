const express = require("express");
const userController = require("../../controllers/api/v1/user.controller");
const router = express.Router();
router.get("/users", userController.index);
router.get("/users/:id", userController.find);
router.post("/users", userController.create);
router.patch("/users/:id", userController.update);
module.exports = router;
