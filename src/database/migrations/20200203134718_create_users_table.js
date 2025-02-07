export const up = async knex =>
  await knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('username').unique();
    table.string('password');
    table.string('fullName');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });

export const down = async knex =>
  await knex.schema.dropTableIfExists('users');