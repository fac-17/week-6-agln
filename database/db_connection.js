const { Pool } = require("pg");
const url = require("url");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

if (!process.env.DATABASE_URL) {
  throw new Error("Environment variable DATABASE_URL must be set");
}

const params = url.parse(process.env.DATABASE_URL);

const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/"[1]),
  max: process.env.DB_MAX_CONNECTIONS || 2
};

if (username) {
  options.user = username;
}
if (password) {
  options.password = password;
}

options.ssql = options.host !== "localhost";
module.exports = new Pool(options);
