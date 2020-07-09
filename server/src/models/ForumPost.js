const { Model } = require('objection');
const knex = require('./knex');

Model.knex(knex);

class ForumPost extends Model {
  static get tableName() {
    return 'forumPosts';
  }
  
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id_sub_category', 'id_user', 'content'],
      properties: {
        id: { type: 'integer' },
        id_sub_category: { type: 'integer' },
        id_user: { type: 'integer'},
      }
    };
  }
}

module.exports = ForumPost;
