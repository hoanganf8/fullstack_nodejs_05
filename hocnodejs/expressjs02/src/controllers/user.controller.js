const { User, Phone } = require("../models/index");
module.exports = {
  index: async (req, res) => {
    const users = await User.findAll();
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
};
