module.exports = (app) => {
  app
    .route("/communication")
    .post(app.api.communication.save)
    .get(app.api.communication.get);

  app.route("/communication/:id").delete(app.api.communication.remove);
};
