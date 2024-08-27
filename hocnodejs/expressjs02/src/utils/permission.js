const { User, Role, Permission } = require("../models/index");
module.exports = {
  getPermissions: async (userId) => {
    const user = await User.findByPk(userId, {
      include: {
        model: Role,
        as: "roles",
        through: {
          attributes: [],
        },
        include: {
          model: Permission,
          as: "permissions",
          attributes: ["id", "value"],
          through: {
            attributes: [],
          },
        },
      },
    });
    const permissions = [];
    user.roles.forEach((role) => {
      role.permissions.forEach((permission) => {
        !permissions.includes(permission.value) &&
          permissions.push(permission.value);
      });
    });
    return permissions;
  },
};
