import { Knex } from 'knex';

const up = (knex: Knex): Promise<void> => {
  return knex.schema.createTable('users', table => {
    table.bigIncrements('id').unsigned().primary();
    table.string('email', 45).notNullable();
    table.string('name', 50).notNullable();
    table.string('password', 255).notNullable();
    table.string('phone', 10).notNullable();
    table.string('role', 10).notNullable().defaultTo('user');
    table.string('status', 10).notNullable().defaultTo('active');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });
};

const down = (knex: Knex): Promise<void> => {
  return knex.schema.dropTable('users');
};

export default { up, down };
