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
}

module.exports = ForumSubCategory;
