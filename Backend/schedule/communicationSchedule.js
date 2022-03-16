const schedule = require("node-schedule");

module.exports = (app) => {
  schedule.scheduleJob("*/1 * * * *", async function () {
    const today = new Date().toISOString().substring(0, 16);

    const communication = await app
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
      .whereLike("deliveryDate", `${today}%`)
      .whereNull("deleteAt");

    for (let i = 0; i < communication.length; i++) {
      await app
        .db("communication")
        .update("communicationStatus", "send")
        .where("id", communication[i]["id"]);

      console.log("Mensagem enviada");
    }
  });
};
