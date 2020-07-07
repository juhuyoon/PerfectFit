const tableName = 'forumPosts';

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.bigIncrements('id').unsigned().primary();
    table.integer('idSubCategory').notNull();
    table.integer('idUser').notNull();
    table.text('content').notNull();
    table.timestamp('createdAt').defaultTo(new Date().toISOString());
    table.timestamp('updatedAt');

    table.foreign('idSubCategory').references('forumSubCategories.id');
    table.foreign('idUser').references('members.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
