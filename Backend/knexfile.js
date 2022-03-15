// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  development: {
    client: process.env.DB_CLIENT_DEV,
    connection: {
      database: "communication",
      user: process.env.DB_USER_DEV,
      password: process.env.DB_PASS_DEV,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  test: {
    client: process.env.DB_CLIENT_TEST,
    connection: {
      database: "communication_test",
      user: process.env.DB_USER_DEV,
      password: process.env.DB_PASS_DEV,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
