const { User } = require("../models/index");
module.exports = {
  index: async (req, res) => {
    const users = await User.findAll();
    res.json({ users });
  },
};
