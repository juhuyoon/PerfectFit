const tableName = 'forum_sub_categories';

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.bigIncrements('id').unsigned().primary();
    table.integer('id_category').notNull();
    table.string('title').notNull();
    table.text('description').notNull();
    table.timestamp('created_at').defaultTo(knex.raw('NOW() '));
    table.timestamp('updated_at');

    table.foreign('id_category').references('forum_categories.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
