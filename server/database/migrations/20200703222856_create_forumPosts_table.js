const tableName = 'forumPosts';

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.bigIncrements('id').unsigned().primary();
    table.int('idSubCategory').notNull();
    table.string('idUser').notNull();
    table.text('content').notNull();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt');

    table.foreign('idSubCategory').references('forumSubCategory.id');
    table.foreign('idUser').references('members.id');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
