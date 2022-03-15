const app = require("express")();
const consign = require("consign");
const db = require("./config/db");

app.db = db;

consign()
  .then("./config/middlewares.js")
  .then("./api/validation.js")
  .then("./api")
  .then("./config/routes.js")
  .into(app);

if (!module.parent) {
  app.listen(process.env.PORT, () => console.log(`Runing ${process.env.PORT}`));
}
module.exports = app;
