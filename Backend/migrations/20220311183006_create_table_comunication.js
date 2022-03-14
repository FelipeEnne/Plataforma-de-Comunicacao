/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("communication", (table) => {
    table.increments("id").primary();
    table.string("sender").notNullable();
    table.string("recipient").notNullable();
    table.text("communicationMessage").notNullable();
    table.datetime("shippingTime", { precision: 6, useTz: true }).notNullable();
    table.specificType("communicationFormat", "text ARRAY").notNullable();
    table.timestamp("deleteAt");
    table.timestamp("createdAt", { precision: 6 }).defaultTo(knex.fn.now(6));
    table
      .enu("communicationStatus", ["pending", "sending", "sent"])
      .defaultTo("pending");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("communication");
};
