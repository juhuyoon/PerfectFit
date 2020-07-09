const { Model } = require('objection');
const knex = require('./knex');

Model.knex(knex);

class Member extends Model {
  static get tableName() {
    return 'members';
  }

  static get jsonSchema() {
    return {
      type: 'object',

      required: ['full_name', 'email', 'password', 'username'],

      properties: {
        full_name: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
        },
        username: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
        },
        email: {
          type: 'string',
          minLength: 1,
          maxLength: 255,
        },
        password: {
          type: 'string',
          maxLength: 255,
        },
      },
    };
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = Member;
