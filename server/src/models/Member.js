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
      required: ['full_name', 'username', 'city', 'email', 'password', 'access_level', 'reason', 'confirmed'],
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
        city: {
          type: 'string',
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
        access_level: {
          type: 'string',
          maxLength: 255,
        },
      },
    };
  }

  static get relationMappings() {
    // eslint-disable-next-line global-require
    const ForumPost = require('./ForumPost');
    return {
      posts: {
        relation: Model.BelongsToOneRelation,
        modelClass: ForumPost,
        join: {
          from: 'members.id',
          to: 'forum_posts.id_user',
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
