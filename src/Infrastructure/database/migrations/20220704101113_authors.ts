import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("authors", function (table) {
    table.increments("id");
    table.string("website");
    table.string("bio");
    table.string("username");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("authors");
}
