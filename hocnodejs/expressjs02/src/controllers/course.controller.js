const { Course } = require("../models/index");
module.exports = {
  index: async (req, res) => {
    const courses = await Course.findAll();
    res.json({ courses });
  },
  find: async (req, res) => {
    const { id } = req.params;
    // const course = await Course.findByPk(id);
    const course = await Course.findOne({
      where: { id: id }, //where id = ${id}
    });
    res.json({ course });
  },
  create: async (req, res) => {
    const body = req.body;
    const course = await Course.create({
      name: body.name,
      price: body.price,
    });
    res.json({ course });
  },
};
