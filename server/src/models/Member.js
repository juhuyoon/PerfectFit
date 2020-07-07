const { Model } = require('./knex');

class Member extends Model {
  static get tableName() {
    return 'members';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      // Would setting require
      // be redundant after setting it up in knex?
      required: [
        // 'fullName',
        // 'userName',
        // 'city',
        // 'email',
        // 'password',
        // 'accessLevel',
        // 'reason',
      ],

      properties: {
        id: { type: 'integer' },
        fullName: { type: 'string', minLength: 1, maxLength: 255 },
        userName: { type: 'string', minLength: 1, maxLength: 255 },
        city: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 255 },
      },
    };
  }
}

module.exports = Member;
