const tableName = 'forum_posts';

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.bigIncrements('id').unsigned().primary();
    table.integer('id_sub_category').notNull();
    table.integer('id_user').notNull();
    table.text('content').notNull();
    table.timestamp('created_at').defaultTo(knex.raw('NOW() '));
    table.timestamp('updated_at');

    table.foreign('id_sub_category').references('forum_sub_categories.id');
    table.foreign('id_user').references('members.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
