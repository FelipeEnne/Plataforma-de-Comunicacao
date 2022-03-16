/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("communication", (table) => {
    table.increments("id").primary();
    table.string("sender").notNullable();
    table.string("senderId").notNullable().defaultTo(1);
    table.string("receiver").notNullable();
    table.string("receiverId").notNullable().defaultTo(1);
    table.text("communicationMessage").notNullable();
    table.string("deliveryDate").notNullable();
    table.specificType("communicationFormat", "text ARRAY").notNullable();
    table.timestamp("deleteAt");
    table.timestamp("createdAt", { precision: 6 }).defaultTo(knex.fn.now(6));
    table
      .enu("communicationStatus", ["pending", "sending", "send"])
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
