const config = require('config');
const knex = require('knex');

const client = config.get('knex.client');
const connection = config.get('knex.connection');

module.exports = knex({
  client,
  connection,
});
