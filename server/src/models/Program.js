const { Model } = require('objection');
const knex = require('./knex');

Model.knex(knex);

class Program extends Model {
  static get tableName() {
    return 'programs';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'address', 'phone_num', 'prices', 'services', 'reviews', 'stars', 'accepted'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        address: { type: 'string', minLength: 1, maxLength: 255 },
        phone_num: { type: 'string', minLength: 1, maxLength: 255 },
        prices: { type: 'number', minimum: 0 },
        stars: { type: 'number', minimum: 0, maximum: 5 },
      },
    };
  }
}

module.exports = Program;
