const { User, Phone, Post } = require("../models/index");
module.exports = {
  index: async (req, res) => {
    const users = await User.findAll({
      include: [
        {
          model: Post,
          as: "posts",
        },
        {
          model: Phone,
          as: "phone",
        },
      ],
    });
    // for (let i = 0; i < users.length; i++) {
    //   const user = users[i];
    //   const posts = await user.getPosts();
    //   user.setDataValue("posts", posts);
    // }
    res.json({ users });
  },
  find: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    const phone = await user.getPhone();
    res.json({ user, phone: phone.value });
  },
  findByPhone: async (req, res) => {
    const { phone } = req.params;
    //Trả về instance của phone
    const phoneInstance = await Phone.findOne({
      where: {
        value: phone,
      },
    });
    if (!phoneInstance) {
      return res.json({ error: "Không tìm thấy" });
    }
    const user = await phoneInstance.getUser();
    res.json({ phone, user });
  },
  create: async (req, res) => {
    const user = await User.create({
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
      status: req.body.status,
    });
    if (user) {
      await user.createPhone({
        value: req.body.phone,
      });
    }
    return res.json({ user });
  },
  getPosts: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    const posts = await user.getPosts();
    res.json({ user, posts });
  },
  findByPost: async (req, res) => {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    const user = await post.getUser();
    res.json({ post, user });
  },
  createPost: async (req, res) => {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    const post = await user.createPost({
      title: "Post 7",
    });
    return res.json({ user, post });
  },
};
