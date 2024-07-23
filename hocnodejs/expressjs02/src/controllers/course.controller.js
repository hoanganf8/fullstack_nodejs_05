const { Course } = require("../models/index");
const { Op } = require("sequelize");
module.exports = {
  index: async (req, res) => {
    const { name, price, id } = req.query;
    const where = {};
    if (id) {
      where.id = {
        [Op.gt]: id,
      };
    }
    if (name) {
      where[Op.or] = {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      };
    }
    if (price) {
      where[Op.or] = {
        ...where[Op.or],
        price: {
          [Op.gte]: price,
        },
      };
    }
    const courses = await Course.findAll({
      where,
      //   attributes: { exclude: "price" },
      //   order: [["id", "desc"]],
      //   where: {
      //     // id: {
      //     //   [Op.gte]: 1,
      //     // },
      //     // name: {
      //     //   [Op.iLike]: `%full%`,
      //     // },
      //     [Op.or]: {
      //       name: {
      //         [Op.iLike]: `%full%`,
      //       },
      //       price: {
      //         [Op.gte]: 600000,
      //       },
      //     },
      //     id: {
      //       [Op.gt]: 1,
      //     },
      //   },
    });
    res.json({ courses });
    //WHERE id > 1 AND (NAME LIKE '%full%' OR price >= 600000)
    //http://localhost:3000/courses?id=1&name=full&price=600000
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
  update: async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const status = await Course.update(body, {
      where: { id },
    });
    res.json({ status });
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const status = await Course.destroy({
      where: { id },
    });
    res.json({ status });
  },
  deletes: async (req, res) => {
    const { ids } = req.body;
    if (!ids || !Array.isArray(ids) || !ids.length) {
      return res.status(400).json({
        error: "Body không hợp lệ",
      });
    }
    const status = await Course.destroy({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });
    res.json({ status });
  },
};

//Viết route và action để xóa course theo nhiều id (id gửi lên bằng body)

//Migration, Seeder
