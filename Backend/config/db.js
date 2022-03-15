const config = require("../knexfile.js");
const knex = require("knex");

let db = null;
if (process.env.NODE_ENV === "test") {
  db = knex(config.test);
} else {
  db = knex(config.development);
  db.migrate.latest();
}

module.exports = db;
