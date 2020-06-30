const config = require('config');

module.exports = {
  test: {
    client: config.get('knex.client'),
    connection: config.get('knex.connection'),
  },

  development: {
    client: config.get('knex.client'),
    connection: config.get('knex.connection'),
    pool: config.get('knex.pool'),
    migrations: config.get('knex.migrations'),
    seeds: config.get('knex.seeds'),
  },

  production: {
    client: config.get('knex.client'),
    connection: config.get('knex.connection'),
    pool: config.get('knex.pool'),
    migrations: config.get('knex.migrations'),
  },
};
