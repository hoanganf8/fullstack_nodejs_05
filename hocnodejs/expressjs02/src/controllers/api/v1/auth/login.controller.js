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
} = require("../../../../utils/jwt");

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
    return successResponse(
      res,
      {
        accessToken,
      },
      null,
      StatusCodes.OK,
      ReasonPhrases.OK
    );
  },
  profile: async (req, res) => {
    try {
      const accessToken = req
        .get("Authorization")
        ?.split?.(" ")
        .slice(-1)
        .join();
      const { userId } = verifyAccessToken(accessToken);
      //Truy vấn tới bảng user
      const user = await User.findByPk(userId);
      if (!user) {
        throw new Error("User Not Found");
      }
      return successResponse(res, user, {}, StatusCodes.OK, ReasonPhrases.OK);
    } catch (e) {
      return errorResponse(
        res,
        "Thông tin xác thực không chính xác",
        StatusCodes.UNAUTHORIZED,
        ReasonPhrases.UNAUTHORIZED
      );
    }
  },
};
