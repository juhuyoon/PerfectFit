const tableName = 'members';

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.bigIncrements('id').unsigned().primary();
    table.string('fullName').notNull();
    table.string('userName').notNull();
    table.string('city').notNull();
    table.string('email').notNull();
    table.string('password').notNull();
    table.integer('accessLevel').notNull();
    table.text('reason').notNull();
    table.boolean('confirmed').defaultTo(0);
    table.timestamp('createdAt').defaultTo(new Date().toISOString());
    table.timestamp('updatedAt');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
