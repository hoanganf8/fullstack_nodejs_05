const express = require("express");
const userController = require("../../controllers/api/v1/user.controller");
const router = express.Router();
router.get("/users", userController.index);
router.post("/users", userController.create);
module.exports = router;
