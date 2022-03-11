module.exports = (app) => {
  const { existsOrError, notExistsOrError } = app.api.validation;

  const save = async (req, res) => {
    const communication = { ...req.body };
    try {
      existsOrError(communication.sender, "Mandatário não informado");
      existsOrError(communication.recipient, "Destinatário  não informado");
      existsOrError(communication.message, "Sem menssagem");
      existsOrError(communication.shippingTime, "Sem data para envio");
      existsOrError(communication.messageFormat, "Sem forma de envio");
    } catch (msg) {
      return res.status(400).send(msg);
    }

    app
      .db("communication")
      .insert(communication)
      .then((_) => res.status(204).send())
      .catch((err) => res.status(500).send(err));
  };

  const get = (req, res) => {
    app
      .db("communication")
      .select(
        "id",
        "sender",
        "recipient",
        "message",
        "shippingTime",
        "messageFormat"
      )
      .whereNull("delete_at")
      .then((communication) => res.json(communication))
      .catch((err) => res.status(500).send(err));
  };

  const remove = async (req, res) => {
    try {
      rowsDeleted = await app
        .db("communication")
        .where({ id: req.params.id })
        .del();

      try {
        existsOrError(rowsDeleted, "Comunicação não encontrada");
      } catch (msg) {
        res.status(400).send(msg);
      }

      res.status(204).send();
    } catch (msg) {
      res.status(500).send(msg);
    }
  };

  return { save, get, remove };
};
