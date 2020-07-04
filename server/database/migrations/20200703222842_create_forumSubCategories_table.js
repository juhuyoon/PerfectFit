const tableName = 'forumSubCategories';

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.bigIncrements('id').unsigned().primary();
    table.int('idCategory').notNull();
    table.string('title').notNull();
    table.text('description').notNull();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt');

    table.foreign('idCategory').references('forumCategory.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
