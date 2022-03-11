/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("communication", (table) => {
    table.increments("id").primary();
    table.string("sender").notNullable();
    table.string("recipient").notNullable();
    table.text("message").notNullable();
    table.datetime("shippingTime", { precision: 6, useTz: true }).notNullable();
    table.specificType("messageFormat", "text ARRAY").notNullable();
    table.timestamp("delete_at");
    table.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now(6));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("communication");
};
