const app = require("../../index.js");

describe("Valitador the communication inputs (existsOrError)", () => {
  const { existsOrError } = app.api.validation;
  const errorCommunication = "Error";

  test("Validate empty", () => {
    const emptyCommunication = "";

    const testEmptyCommunication = () => {
      existsOrError(emptyCommunication, errorCommunication);
    };
    expect(testEmptyCommunication).toThrow(errorCommunication);
  });

  test("Validate empty array", () => {
    const emptyArray = [];

    const testEmptyArrayCommunication = () => {
      existsOrError(emptyArray, errorCommunication);
    };
    expect(testEmptyArrayCommunication).toThrow(errorCommunication);
  });

  test("Validate undefined", () => {
    const undefinedCommunication = undefined;

    const testUndefinedCommunication = () => {
      existsOrError(undefinedCommunication, errorCommunication);
    };
    expect(testUndefinedCommunication).toThrow(errorCommunication);
  });

  test("Validate empty null", () => {
    const nullCommunication = null;
    const testNullCommunication = () => {
      existsOrError(nullCommunication, errorCommunication);
    };
    expect(testNullCommunication).toThrow(errorCommunication);
  });

  test("Valid input", () => {
    const validCommunication = "test";
    expect(existsOrError(validCommunication, errorCommunication)).toBe(true);
  });
});

describe("Valitador the communication date", () => {
  const { verifyDeliveryDate, verifyIfDeliveryDatePast } = app.api.validation;
  const errorCommunication = "Error";

  test("Invalid number date", () => {
    const invalidDate = 123456;

    const testInvalidDate = () => {
      verifyDeliveryDate(invalidDate, errorCommunication);
    };
    expect(testInvalidDate).toThrow(errorCommunication);
  });

  test("Invalid string date", () => {
    const invalidDate = "test";

    const testInvalidDate = () => {
      verifyDeliveryDate(invalidDate, errorCommunication);
    };
    expect(testInvalidDate).toThrow(errorCommunication);
  });

  test("Valid date", () => {
    const validDate = "2030-03-25T01:29:21Z";

    expect(verifyDeliveryDate(validDate, errorCommunication)).toBe(true);
  });

  test("Validate if date has passed.", () => {
    const invalidDate = "2021-03-25T01:29:21Z";

    const testInvalidCommunication = () => {
      verifyIfDeliveryDatePast(invalidDate, errorCommunication);
    };
    expect(testInvalidCommunication).toThrow(errorCommunication);
  });
});

describe("Valitador the communication format", () => {
  const { verifyValidCommunicationFormat } = app.api.validation;
  const errorCommunication = "Error";

  test("Invalid format", () => {
    const invalidFormat = ["sms", "email", "whatsap"];

    const testInvalidFormat = () => {
      verifyValidCommunicationFormat(invalidFormat, errorCommunication);
    };
    expect(testInvalidFormat).toThrow(errorCommunication);
  });

  test("Valid format", () => {
    const validFormat = ["sms", "email", "push", "whatsapp"];

    expect(
      verifyValidCommunicationFormat(validFormat, errorCommunication)
    ).toBe(true);
  });
});
