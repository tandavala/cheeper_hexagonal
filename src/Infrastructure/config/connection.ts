import "dotenv/config";

module.exports = {
  client: "mysql",
  connection: {
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    extension: "ts",
    directory: "../database/migrations",
  },
};
