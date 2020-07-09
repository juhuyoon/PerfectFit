const tableName = 'members';

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.bigIncrements('id').unsigned().primary();
    table.string('full_name').notNull();
    table.string('username').notNull();
    table.string('city').notNull();
    table.string('email').notNull();
    table.string('password').notNull();
    table.integer('access_level').notNull();
    table.text('reason').notNull();
    table.boolean('confirmed').defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.raw('NOW() '));
    table.timestamp('updated_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
