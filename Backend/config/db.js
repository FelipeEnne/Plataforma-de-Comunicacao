const config = require("../knexfile.js");
const knex = require("knex");

let db = null;
if (process.env.NODE_ENV === "test") {
  db = knex(config.test);
  db.migrate.latest();
} else {
  db = knex(config.development);
  db.migrate.latest();
}

module.exports = db;
