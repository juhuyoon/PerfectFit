const tableName = 'forum_categories';

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.bigIncrements('id').unsigned().primary();
    table.string('title').notNull();
    table.text('description').notNull();
    table.timestamp('created_at').defaultTo(knex.raw('NOW() '));
    table.timestamp('updated_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
