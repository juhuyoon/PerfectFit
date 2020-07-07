const { Model } = require('./knex');

class ForumSubCategory extends Model {
  static get tableName() {
    return 'forumSubCategories';
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
          from: 'forumSubCategories.id',
          to: 'forumPosts.idSubCategory',
        },
      },
    };
  }
}

module.exports = ForumSubCategory;
