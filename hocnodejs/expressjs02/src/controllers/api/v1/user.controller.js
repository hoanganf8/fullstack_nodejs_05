const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
const { object, string } = require("yup");
const { successResponse, errorResponse } = require("../../../utils/response");
const { User } = require("../../../models/index");
module.exports = {
  index: async (req, res) => {
    try {
      const {
        _sort = "id",
        _order = "asc",
        q,
        _limit = 2,
        _page = 1,
      } = req.query;
      const apiKey = req.headers["x-api-key"];
      if (!apiKey || apiKey !== "f8-training") {
        const errors = new Error("Unauthorized");
        errors.status = StatusCodes.UNAUTHORIZED;
        throw errors;
      }
      const where = {};
      if (q) {
        where[Op.or] = [
          { fullname: { [Op.iLike]: `%${q}%` } },
          { email: { [Op.iLike]: `%${q}%` } },
        ];
      }
      const offset = (_page - 1) * _limit;
      const { count, rows: users } = await User.findAndCountAll({
        order: [[_sort, _order]],
        where,
        limit: _limit,
        offset,
      });
      return successResponse(
        res,
        users,
        { total: count, current_page: +_page, per_page: +_limit },
        StatusCodes.OK,
        ReasonPhrases.OK
      );
    } catch (error) {
      if (error.status === 401) {
        return errorResponse(
          res,
          error.message,
          error.status,
          ReasonPhrases.UNAUTHORIZED
        );
      }
      return errorResponse(
        res,
        error.message,
        StatusCodes.INTERNAL_SERVER_ERROR,
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  },
  find: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        const error = new Error("User not found");
        error.status = 404;
        throw error;
      }
      return successResponse(
        res,
        user,
        {},
        StatusCodes.CREATED,
        ReasonPhrases.CREATED
      );
    } catch (e) {
      if (e.status === 404) {
        return errorResponse(
          res,
          e.message,
          StatusCodes.NOT_FOUND,
          ReasonPhrases.NOT_FOUND
        );
      }
      return errorResponse(
        res,
        e.message,
        StatusCodes.INTERNAL_SERVER_ERROR,
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  },
  create: async (req, res) => {
    try {
      const schema = object({
        fullname: string()
          .required("Tên bắt buộc phải nhập")
          .min(4, "Tên phải từ 4 ký tự"),
        email: string()
          .required("Email bắt buộc phải nhập")
          .email("Email không đúng định dạng")
          .test("checkUniqueEmail", "Email đã tồn tại", async (value) => {
            const user = await User.findOne({
              where: {
                email: value,
              },
            });
            return !user;
          }),
        password: string()
          .required("Password bắt buộc phải nhập")
          .min(6, "Mật khẩu quá ngắn"),
        status: string().test(
          "checkStatus",
          "Trạng thái không hợp lệ",
          (value) => {
            return value === "true" || value === "false";
          }
        ),
      });
      const body = await schema.validate(req.body, {
        abortEarly: false,
      });

      const user = await User.create(body);
      return successResponse(
        res,
        user,
        {},
        StatusCodes.CREATED,
        ReasonPhrases.CREATED
      );
    } catch (e) {
      if (e.errors) {
        const errors = Object.fromEntries(
          e.inner.map((err) => [err.path, err.message])
        );
        return errorResponse(
          res,
          errors,
          StatusCodes.BAD_REQUEST,
          ReasonPhrases.BAD_REQUEST
        );
      }
      return errorResponse(
        res,
        e.message,
        StatusCodes.INTERNAL_SERVER_ERROR,
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const rules = {};
      const userData = {
        status: false,
      };
      if (req.body.fullname) {
        rules.fullname = string().min(4, "Tên phải từ 4 ký tự");
        userData.fullname = req.body.fullname;
      }
      if (req.body.email) {
        rules.email = string()
          .email("Email không đúng định dạng")
          .test("checkUniqueEmail", "Email đã tồn tại", async (value) => {
            const user = await User.findOne({
              where: {
                email: value,
                id: {
                  [Op.ne]: id,
                },
              },
            });
            return !user;
          });
        userData.email = req.body.email;
      }
      if (req.body.password) {
        rules.password = string().min(6, "Mật khẩu quá ngắn");
        userData.password = req.body.password;
      }
      if (req.body.status) {
        rules.status = string().test(
          "checkStatus",
          "Trạng thái không hợp lệ",
          (value) => {
            return value === "true" || value === "false";
          }
        );
        userData.status = req.body.status;
      }
      const schema = object(rules);
      await schema.validate(req.body, {
        abortEarly: false,
      });
      const [status] = await User.update(userData, {
        where: { id },
      });

      if (!status) {
        throw new Error("Server Error");
      }
      const user = await User.findByPk(id);
      return successResponse(res, user, {}, StatusCodes.OK, ReasonPhrases.OK);
    } catch (e) {
      if (e.errors) {
        const errors = Object.fromEntries(
          e.inner.map((err) => [err.path, err.message])
        );
        return errorResponse(
          res,
          errors,
          StatusCodes.BAD_REQUEST,
          ReasonPhrases.BAD_REQUEST
        );
      }
      return errorResponse(
        res,
        e.message,
        StatusCodes.INTERNAL_SERVER_ERROR,
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  },
};
