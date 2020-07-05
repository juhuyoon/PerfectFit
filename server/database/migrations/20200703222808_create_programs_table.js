const tableName = 'programs';

exports.up = function (knex) {
  return knex.schema.createTable(tableName, function (table) {
    table.bigIncrements('id').unsigned().primary();
    table.string('name').notNull();
    table.string('address').notNull();
    table.string('phoneNum').notNull();
    table.decimal('prices').notNull();
    table.text('services', ['mediumtext']).notNull();
    table.text('reviews', ['mediumtext']).notNull();
    table.integer('stars').notNull();
    table.boolean('accepted').defaultTo(0);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable(tableName);
};
