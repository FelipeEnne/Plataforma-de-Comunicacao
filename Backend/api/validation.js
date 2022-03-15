module.exports = (app) => {
  function existsOrError(value, msg) {
    if (!value) throw msg;
    if (Array.isArray(value) && value.length === 0) throw msg;
    if (typeof value === "string" && !value.trim()) throw msg;
    return true;
  }

  function verifyDeliveryDate(value, msg) {
    if (
      !/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/.test(
        value
      )
    )
      throw msg;
    return true;
  }

  function verifyIfDeliveryDatePast(value, msg) {
    if (new Date(value) < new Date()) throw msg;
    return true;
  }

  function verifyValidCommunicationFormat(value, msg) {
    const arrayValid = value.filter((v) => {
      if (v == "sms" || v == "email" || v == "push" || v == "whatsapp") {
        return false;
      }
      return true;
    });
    if (arrayValid.length !== 0) throw msg;
    return true;
  }

  return {
    existsOrError,
    verifyDeliveryDate,
    verifyIfDeliveryDatePast,
    verifyValidCommunicationFormat,
  };
};
