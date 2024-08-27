const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { errorResponse } = require("../utils/response");
const { getPermissions } = require("../utils/permission");
module.exports = (value) => {
  return async (req, res, next) => {
    const userId = req.user.id;
    const permissions = await getPermissions(userId);
    if (!permissions.includes(value)) {
      return errorResponse(
        res,
        "Bạn không có quyền truy cập",
        StatusCodes.FORBIDDEN,
        ReasonPhrases.FORBIDDEN
      );
    }
    next();
  };
};
