const bcrypt = require("bcrypt");

module.exports = {
  hashMake: (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hash(password, salt);
  },
  hashCheck: (password, hash) => {
    return bcrypt.compare(password, hash);
  },
};
