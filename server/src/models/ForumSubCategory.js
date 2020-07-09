const { Model } = require('objection');
const knex = require('./knex');

Model.knex(knex);

class ForumSubCategory extends Model {
  static get tableName() {
    return 'forum_sub_categories';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string', minLength: 1, maxLength: 255 },
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
          from: 'forum_sub_categories.id',
          to: 'forum_posts.id_sub_category',
        },
      },
    };
  }
}

module.exports = ForumSubCategory;
