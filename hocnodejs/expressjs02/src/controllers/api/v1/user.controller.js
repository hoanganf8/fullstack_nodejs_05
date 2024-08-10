const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
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
      return errorResponse(
        res,
        error.message,
        StatusCodes.INTERNAL_SERVER_ERROR,
        ReasonPhrases.INTERNAL_SERVER_ERROR
      );
    }
  },
};
