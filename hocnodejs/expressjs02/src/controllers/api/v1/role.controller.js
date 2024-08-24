const { errorResponse, successResponse } = require("../../../utils/response");
const { Role, Permission } = require("../../../models/index");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
module.exports = {
  index: async (req, res) => {
    try {
      const roles = await Role.findAll({
        include: {
          model: Permission,
          as: "permissions",
          attributes: ["id", "value"],
          through: {
            attributes: [],
          },
        },
      });
      return successResponse(res, roles, {}, StatusCodes.OK, ReasonPhrases.OK);
    } catch {
      return errorResponse(
        res,
        err.message,
        StatusCodes.INTERNAL_SERVER_ERROR,
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  },
  find: async (req, res) => {
    try {
      const { id } = req.params;
      const role = await Role.findByPk(id, {
        include: {
          model: Permission,
          as: "permissions",
          attributes: ["id", "value"],
          through: {
            attributes: [],
          },
        },
      });
      return successResponse(res, role, {}, StatusCodes.OK, ReasonPhrases.OK);
    } catch (err) {
      return errorResponse(
        res,
        err.message,
        StatusCodes.INTERNAL_SERVER_ERROR,
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  },
  create: async (req, res) => {
    try {
      const { name, permissions } = req.body;

      if (!name) {
        return errorResponse(
          res,
          "Vui lòng cung cấp tên role",
          StatusCodes.BAD_REQUEST,
          ReasonPhrases.BAD_REQUEST
        );
      }
      const role = await Role.create({
        name,
      });
      if (permissions) {
        const permissionList = await Promise.all(
          permissions.map(async (value) => {
            const [permission] = await Permission.findOrCreate({
              where: {
                value,
              },
              defaults: {
                value,
              },
            });
            return permission;
          })
        );
        await role.setPermissions(permissionList);
      }
      return successResponse(res, role, {}, StatusCodes.OK, ReasonPhrases.OK);
    } catch (err) {
      return errorResponse(
        res,
        err.message,
        StatusCodes.INTERNAL_SERVER_ERROR,
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  },
  update: async (req, res) => {
    try {
      const { name, permissions } = req.body;
      const { id } = req.params;
      const role = await Role.findByPk(id);
      if (!role) {
        throw new Error("Role not found");
      }
      if (name) {
        await role.update({ name });
      }

      if (permissions) {
        const permissionList = await Promise.all(
          permissions.map(async (value) => {
            const [permission] = await Permission.findOrCreate({
              where: {
                value,
              },
              defaults: {
                value,
              },
            });
            return permission;
          })
        );
        await role.setPermissions(permissionList);
      }
      return successResponse(res, role, {}, StatusCodes.OK, ReasonPhrases.OK);
    } catch (err) {
      return errorResponse(
        res,
        err.message,
        StatusCodes.INTERNAL_SERVER_ERROR,
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  },
};
