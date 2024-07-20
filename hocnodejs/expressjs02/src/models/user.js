const db = require("../utils/db");
module.exports = {
  getUsers: () => {
    return db`SELECT * FROM users`;
  },
  getUser: (id) => {
    return db`SELECT * FROM users WHERE id=${id}`;
  },
  createUser: ({ name, email, password, status }) => {
    return db`INSERT INTO users (name, email, password, status, created_at, updated_at) VALUES (${name}, ${email}, MD5(${password}), ${
      status === "true"
    }, NOW(), NOW())
    RETURNING *
    `;
  },
  updateUser: ({ name, email, password, status }, id) => {
    return db`UPDATE users SET name=${name}, email=${email}, password=MD5(${password}), status=${status}, updated_at=NOW() WHERE id=${id}
    RETURNING *
    `;
  },
  deleteUser: (id) => {
    return db`DELETE FROM users WHERE id=${id}
    RETURNING *
    `;
  },
};
