const { verifyAccessToken } = require("../utils/jwt");
const { User } = require("../models/index");
const { errorResponse } = require("../utils/response");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const redis = require("../utils/redis");

module.exports = async (req, res, next) => {
  try {
    const accessToken = req.get("Authorization")?.split?.(" ").slice(-1).join();
    //Kiểm tra token có trong blacklist không?
    if (accessToken) {
      await redis.connect();
      const backlist = await redis.getData(`backlist-${accessToken}`);
      if (backlist) {
        throw new Error("Unauthorized");
      }
      await redis.disconnect();
    }
    const { userId } = verifyAccessToken(accessToken);
    //Truy vấn tới bảng user
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User Not Found");
    }
    req.user = user;
    req.accessToken = accessToken;
    return next();
  } catch (e) {
    return errorResponse(
      res,
      "Thông tin xác thực không chính xác",
      StatusCodes.UNAUTHORIZED,
      ReasonPhrases.UNAUTHORIZED
    );
  }
};
