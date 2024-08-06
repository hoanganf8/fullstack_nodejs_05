const { Category, Post } = require("../models/index");
module.exports = {
  index: async (req, res) => {
    const categories = await Category.findAll({
      include: {
        model: Post,
        as: "posts",
        through: {
          attributes: [],
        },
        attributes: ["id", "title", "user_id"],
      },
    });
    res.json({ categories });
  },
  find: async (req, res) => {
    const { id } = req.params;
    const { posts } = await Category.findByPk(id, {
      include: {
        model: Post,
        as: "posts",
      },
    });
    res.json({ posts });
  },
  findByPost: async (req, res) => {
    const { postId } = req.params;
    const { categories } = await Post.findByPk(postId, {
      include: {
        model: Category,
        as: "categories",
      },
    });
    res.json({ categories });
  },
  createPost: async (req, res) => {
    const { id } = req.params;
    const userId = 1;
    const { title } = req.body;
    if (!title) {
      return res.json({ error: "Lỗi" });
    }
    const category = await Category.findByPk(id);
    const post = await category.createPost({
      title,
      user_id: userId,
    });
    res.json({ post });
  },
  createPosts: async (req, res) => {
    const { id } = req.params;
    const userId = 1;
    const body = req.body;
    if (!Array.isArray(body)) {
      return res.json({ error: "Body phải là mảng" });
    }
    const posts = await Promise.all(
      body.map((postBody) => {
        return Post.create(postBody);
      })
    );

    const category = await Category.findByPk(id);
    category.addPosts(posts);
    res.json({ posts });
  },
  setPosts: async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const category = await Category.findByPk(id);
    //setPosts(array)
    //Dùng Promise.all tạo 1 array chứa các instance của các post gửi lên từ body
    const posts = await Promise.all(
      body.map((postId) => Post.findByPk(postId))
    );
    await category.setPosts(posts);
    res.json({ category });
  },
  deletePost: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Post.findByPk(id);
      await post.setCategories([]);
      const status = await Post.destroy({ where: { id } });
      return res.json({ status });
    } catch (e) {
      return res.json({ error: e.message });
    }
  },
};

//category.addPost(instance)
//category.addPosts(array)
