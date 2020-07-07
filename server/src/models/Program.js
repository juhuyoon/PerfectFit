const { Model } = require('./knex');

class Program extends Model {
  static get tableName() {
    return 'programs';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        address: { type: 'string', minLength: 1, maxLength: 255 },
        phoneNum: { type: 'string', minLength: 1, maxLength: 255 },
      },
    };
  }
}

module.exports = Program;
