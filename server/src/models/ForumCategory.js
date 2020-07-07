const { Model } = require('knex');

class ForumCategory extends Model {
  static get tableName() {
    return 'forumCategories';
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
    const ForumSubCategory = require('./ForumSubCategory');
    return {
      categories: {
        relation: Model.BelongsToOneRelation,
        modelClass: ForumSubCategory,
        join: {
          from: 'forumCategories.id',
          to: 'forumSubCategories.idCategory',
        },
      },
    };
  }
}

module.exports = ForumCategory;
