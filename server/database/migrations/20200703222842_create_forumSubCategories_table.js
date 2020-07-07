const tableName = 'forumSubCategories';

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.bigIncrements('id').unsigned().primary();
    table.integer('idCategory').notNull();
    table.string('title').notNull();
    table.text('description').notNull();
    table.timestamp('createdAt').defaultTo(new Date().toISOString());
    table.timestamp('updatedAt');

    table.foreign('idCategory').references('forumCategories.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
