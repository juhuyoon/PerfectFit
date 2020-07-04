const tableName = 'members';

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.bigIncrements('id');
    table.string('full_name');
    table.string('username').unique();
    table.string('email').unique();
    table.string('password');
    table.timestamp('created_at');
    table.timestamp('updated_at');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
