const postgres = require("postgres");

module.exports = postgres({
  host: "localhost", // Postgres ip address[s] or domain name[s]
  port: 5432, // Postgres server port[s]
  database: "f8_fullstack_k5", // Name of database to connect to
  username: "postgres", // Username of database user
  password: "f8@123", // Password of database user
});
