const supertest = require("supertest");
const app = require("../../index.js");
const request = supertest(app);

describe("Routes: communication", () => {
  beforeAll(() => {
    return app.db.migrate.rollback().then(() => app.db.migrate.latest());
  });

  afterAll(function (done) {
    done();
  });

  describe("POST /communication", () => {
    test("Post a communication", async () => {
      const response = await request
        .post("/communication")
        .send(
          JSON.stringify({
            sender: "sender",
            recipient: "recipient",
            communicationMessage: "message",
            shippingTime: "2025-03-17 18:29:21.758315-07",
            communicationFormat: ["sms", "email"],
          })
        )
        .set("Content-type", "application/json");

      expect(response.status).toEqual(204);
    });
  });

  describe("GET /communication", () => {
    test("Should return array of communications", async () => {
      const response = await request.get("/communication");
      expect(response.headers["content-type"]).toBe(
        "application/json; charset=utf-8"
      );
      expect(response.status).toEqual(200);
    });
  });

  describe("Delete /communication/1", () => {
    test("Delete the fist communication", async () => {
      const response = await request.delete("/communication/1");

      expect(response.status).toEqual(204);
    });
  });
});
