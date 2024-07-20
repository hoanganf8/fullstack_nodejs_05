const userModel = require("../models/user");
module.exports = {
  index: async (req, res, next) => {
    const users = await userModel.getUsers();
    res.json({ users });
  },
};
