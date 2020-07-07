const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('../../knexfile');

// To Initialize Knex
const knex = Knex(knexConfig.development);

// Binds all the Models to the knex instance.
// You only have to do this once before you use
// any of your model classes.

Model.knex(knex);

module.exports = {
  Model,
};
