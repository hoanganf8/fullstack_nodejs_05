const userModel = require("../models/user");
module.exports = {
  index: async (req, res) => {
    const users = await userModel.getUsers();
    res.json({ users });
  },
  getDetail: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await userModel.getUser(id);
      if (!user.length) {
        return res.json({ error: "Không có dữ liệu" });
      }
      return res.json({ user });
    } catch (error) {
      return res.json({ error: error.message });
    }
  },
  create: async (req, res) => {
    const { name, email, password, status } = req.body;
    try {
      if (!name || !email || !status || !password) {
        return res.json({ error: "Vui lòng nhập thông tin" });
      }
      const user = await userModel.createUser({
        name,
        email,
        password,
        status,
      });
      res.json({ user });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, email, password, status } = req.body;
    try {
      if (!name || !email || !status || !password) {
        return res.json({ error: "Vui lòng nhập thông tin" });
      }
      //   const userData = await userModel.getUser(id);
      //   if (!userData.length) {
      //     throw new Error("User không tồn tại");
      //   }
      const user = await userModel.updateUser(
        {
          name,
          email,
          password,
          status,
        },
        id
      );
      if (!user.length) {
        throw new Error("Cập nhật không thành công");
      }
      res.json({ user });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const user = await userModel.deleteUser(id);
      if (!user.length) {
        throw new Error("Xóa không thành công");
      }
      res.json({ user });
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
