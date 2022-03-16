module.exports = (app) => {
  const {
    existsOrError,
    verifyDeliveryDate,
    verifyIfDeliveryDatePast,
    verifyValidCommunicationFormat,
  } = app.api.validation;

  const save = async (req, res) => {
    const communication = { ...req.body };

    try {
      existsOrError(communication.sender, "Mandatário não informado");
      existsOrError(communication.receiver, "Destinatário  não informado");
      existsOrError(communication.communicationMessage, "Sem menssagem");
      existsOrError(communication.deliveryDate, "Sem data para envio");
      verifyDeliveryDate(communication.deliveryDate, "Data inválida");
      verifyIfDeliveryDatePast(
        communication.deliveryDate,
        "Essa data já passou"
      );
      existsOrError(communication.communicationFormat, "Sem forma de envio");
      verifyValidCommunicationFormat(
        communication.communicationFormat,
        "Forma de envio inválida"
      );
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
        "receiver",
        "communicationMessage",
        "deliveryDate",
        "communicationFormat",
        "communicationStatus"
      )
      .whereNull("deleteAt")
      .orderBy("deliveryDate", "asc")
      .then((communication) => res.json(communication))
      .catch((err) => res.status(500).send(err));
  };

  const remove = async (req, res) => {
    try {
      rowsDeleted = await app
        .db("communication")
        .where({ id: req.params.id })
        .del();

      existsOrError(rowsDeleted, "Comunicação não encontrada");
      res.status(204).send();
    } catch (msg) {
      res.status(400).send(msg);
    }
  };

  return { save, get, remove };
};
