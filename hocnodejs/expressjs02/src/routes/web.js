const express = require("express");
// const homeController = require("../controllers/home.controller");
const userController = require("../controllers/user.controller");
const courseController = require("../controllers/course.controller");
const categoryController = require("../controllers/category.controller");
const sendMail = require("../utils/mail");
const router = express.Router();
// router.get("/", homeController.index);
router.get("/users", userController.index);
router.get("/users/:id", userController.find);
router.get("/users/find-by-phone/:phone", userController.findByPhone);
router.post("/users", userController.create);
router.get("/users/:id/posts", userController.getPosts);
router.get("/users/find-by-post/:id", userController.findByPost);
router.post("/create-post/:userId", userController.createPost);
router.post("/users/delete/:id", userController.deleteUser);
router.post("/users/restore/:id", userController.restoreUser);
// router.post("/users", userController.create);
// router.post("/users/update/:id", userController.update);
// router.post("/users/delete/:id", userController.delete);
router.get("/courses", courseController.index);
router.get("/courses/:id", courseController.find);
router.post("/courses", courseController.create);
router.post("/courses/update/:id", courseController.update);
router.post("/courses/delete/:id", courseController.delete);
router.post("/courses/deletes", courseController.deletes);

router.get("/categories", categoryController.index);
router.get("/categories/:id", categoryController.find);
router.get("/categories/find-by-post/:postId", categoryController.findByPost);
router.post("/categories/:id/create-post", categoryController.createPost);
router.post("/categories/:id/create-posts", categoryController.createPosts);
router.post("/categories/:id/set-posts", categoryController.setPosts);
router.post("/delete-post/:id", categoryController.deletePost);

router.get("/send-mail", async (req, res) => {
  const content = `
  <p>Chào bạn</p>
  <p>Cảm ơn bạn đã đăng ký khóa học <b>Fullstack Offline</b></p>
  `;
  const info = await sendMail("hoangan@fullstack.edu.vn", "Ok chưa?", content);
  res.json({ info });
});
module.exports = router;
