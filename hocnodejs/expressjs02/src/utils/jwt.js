const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRE } = process.env;
module.exports = {
  createAccessToken: (data) => {
    return jwt.sign(data, JWT_SECRET, { expiresIn: JWT_EXPIRE });
  },
  verifyAccessToken: (token) => {
    return jwt.verify(token, JWT_SECRET);
  },
};
