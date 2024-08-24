const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRE, JWT_REFRESH_EXPIRE, JWT_REFRESH_SECRET } =
  process.env;
module.exports = {
  createAccessToken: (data) => {
    return jwt.sign(data, JWT_SECRET, { expiresIn: JWT_EXPIRE });
  },
  createRefreshToken: (userId) => {
    return jwt.sign(
      {
        userId,
        secret: `${Math.random()}${new Date().getTime()}`,
      },
      JWT_REFRESH_SECRET,
      {
        expiresIn: JWT_REFRESH_EXPIRE,
      }
    );
  },
  verifyAccessToken: (token) => {
    return jwt.verify(token, JWT_SECRET);
  },
  verifyRefreshToken: (token) => {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  },
};
