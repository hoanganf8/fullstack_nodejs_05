const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { User } = require("../../../../models/index");
const {
  errorResponse,
  successResponse,
} = require("../../../../utils/response");
const { hashCheck } = require("../../../../utils/hash");
const {
  createAccessToken,
  verifyAccessToken,
  createRefreshToken,
  verifyRefreshToken,
} = require("../../../../utils/jwt");
const redis = require("../../../../utils/redis");
const { getPermissions } = require("../../../../utils/permission");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return errorResponse(
        res,
        "Vui lòng cung cấp email hoặc mật khẩu",
        StatusCodes.BAD_REQUEST,
        ReasonPhrases.BAD_REQUEST
      );
    }
    //Kiểm tra email có tồn tại không?
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return errorResponse(
        res,
        "Email hoặc mật khẩu không chính xác",
        StatusCodes.UNAUTHORIZED,
        ReasonPhrases.UNAUTHORIZED
      );
    }

    //Lấy password hash từ database
    const { password: hash } = user;

    //So sánh với password từ body thông qua hàm hashCheck
    const status = await hashCheck(password, hash);
    console.log(status);
    if (!status) {
      return errorResponse(
        res,
        "Email hoặc mật không chính xác",
        StatusCodes.UNAUTHORIZED,
        ReasonPhrases.UNAUTHORIZED
      );
    }

    //Trả về access token
    const accessToken = createAccessToken({
      userId: user.id,
    });
    const refreshToken = createRefreshToken(user.id);
    await redis.connect();
    await redis.setData(`refreshToken-${refreshToken}`, refreshToken, 604800);
    await redis.disconnect();
    return successResponse(
      res,
      {
        accessToken,
        refreshToken,
      },
      null,
      StatusCodes.OK,
      ReasonPhrases.OK
    );
  },
  profile: async (req, res) => {
    const data = {
      ...req.user.dataValues,
      permissions: await getPermissions(req.user.id),
    };

    return successResponse(res, data, {}, StatusCodes.OK, ReasonPhrases.OK);
  },
  refreshToken: async (req, res) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) {
        return errorResponse(
          res,
          "Vui lòng cung cấp refreshToken",
          StatusCodes.BAD_REQUEST,
          ReasonPhrases.BAD_REQUEST
        );
      }

      //Kiểm tra xem token có ở trong redis không?
      await redis.connect();
      if (!(await redis.getData(`refreshToken-${refreshToken}`))) {
        throw new Error("Refresh Token not valid");
      }
      await redis.disconnect();

      const { userId } = verifyRefreshToken(refreshToken);
      const accessToken = createAccessToken({
        userId,
      });
      return successResponse(
        res,
        {
          accessToken,
          refreshToken,
        },
        null,
        StatusCodes.OK,
        ReasonPhrases.OK
      );
    } catch (e) {
      return errorResponse(
        res,
        "Refresh token xác thực không chính xác",
        StatusCodes.UNAUTHORIZED,
        ReasonPhrases.UNAUTHORIZED
      );
    }
  },
  logout: async (req, res) => {
    try {
      const { accessToken } = req;
      await redis.connect();
      await redis.setData(`backlist-${accessToken}`, accessToken, 3600);
      await redis.disconnect();
      return successResponse(res, {}, null, StatusCodes.OK, ReasonPhrases.OK);
    } catch (e) {
      return errorResponse(
        res,
        "Logout failed",
        StatusCodes.UNAUTHORIZED,
        ReasonPhrases.UNAUTHORIZED
      );
    }
  },
  revokeToken: async (req, res) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) {
        throw new Error("Refresh token not valid");
      }
      await redis.connect();
      await redis.deleteData(`refreshToken-${refreshToken}`);
      await redis.disconnect();
      return successResponse(res, {}, null, StatusCodes.OK, ReasonPhrases.OK);
    } catch (e) {
      return errorResponse(
        res,
        e.message,
        StatusCodes.UNAUTHORIZED,
        ReasonPhrases.UNAUTHORIZED
      );
    }
  },
};
