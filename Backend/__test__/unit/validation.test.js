const app = require("../../index.js");

describe("Valitador the communication inputs", () => {
  const { existsOrError } = app.api.validation;
  const errorCommunication = "Error";

  test("(existsOrError) validate empty", () => {
    const emptyCommunication = "";

    const testEmptyCommunication = () => {
      existsOrError(emptyCommunication, errorCommunication);
    };
    expect(testEmptyCommunication).toThrow(errorCommunication);
  });

  test("(existsOrError) validate empty array", () => {
    const emptyArray = [];

    const testEmptyCommunication = () => {
      existsOrError(emptyArray, errorCommunication);
    };
    expect(testEmptyCommunication).toThrow(errorCommunication);
  });

  test("(existsOrError) validate undefined", () => {
    const undefinedCommunication = undefined;

    const testEmptyCommunication = () => {
      existsOrError(undefinedCommunication, errorCommunication);
    };
    expect(testEmptyCommunication).toThrow(errorCommunication);
  });

  test("(existsOrError) validate empty null", () => {
    const nullCommunication = null;
    const testEmptyCommunication = () => {
      existsOrError(nullCommunication, errorCommunication);
    };
    expect(testEmptyCommunication).toThrow(errorCommunication);
  });

  test("(existsOrError) valid input", () => {
    const validCommunication = "test";
    const testEmptyCommunication = () => {
      existsOrError(validCommunication, errorCommunication);
    };
    expect(testEmptyCommunication()).toBe(undefined);
  });
});
