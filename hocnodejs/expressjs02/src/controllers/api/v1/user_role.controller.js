const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { errorResponse, successResponse } = require("../../../utils/response");
const { User, Role } = require("../../../models/index");
module.exports = {
  roles: async (req, res) => {
    //Trả về danh sách các roles của 1 user
    try {
      const { id } = req.params;
      const user = await User.findByPk(id, {
        include: {
          model: Role,
          as: "roles",
          through: {
            attributes: [],
          },
        },
      });
      if (!user) {
        return errorResponse(
          res,
          "Không tìm thấy user",
          StatusCodes.NOT_FOUND,
          ReasonPhrases.NOT_FOUND
        );
      }
      const roles = await user.roles;
      return successResponse(res, roles, {}, StatusCodes.OK, ReasonPhrases.OK);
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
    //Cập nhật role cho 1 user
    try {
      const { id } = req.params;
      const { roles } = req.body;
      if (!roles || !roles.length) {
        return errorResponse(
          res,
          "Vui lòng cung cấp Role",
          StatusCodes.BAD_REQUEST,
          ReasonPhrases.BAD_REQUEST
        );
      }
      const user = await User.findByPk(id);
      if (!user) {
        return errorResponse(
          res,
          "Không tìm thấy user",
          StatusCodes.NOT_FOUND,
          ReasonPhrases.NOT_FOUND
        );
      }
      const status = await user.setRoles(roles);
      return successResponse(res, status, {}, StatusCodes.OK, ReasonPhrases.OK);
    } catch (err) {
      return errorResponse(
        res,
        err.message,
        StatusCodes.INTERNAL_SERVER_ERROR,
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  },
  destroy: async (req, res) => {
    //Xóa role của 1 user
    try {
      const { id } = req.params;

      const user = await User.findByPk(id);
      if (!user) {
        return errorResponse(
          res,
          "Không tìm thấy user",
          StatusCodes.NOT_FOUND,
          ReasonPhrases.NOT_FOUND
        );
      }
      await user.setRoles([]);
      return successResponse(res, [], {}, StatusCodes.OK, ReasonPhrases.OK);
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
//Controller này sẽ giải quyết bài toán trả về role tương ứng của 1 user và các thao tác với nó
