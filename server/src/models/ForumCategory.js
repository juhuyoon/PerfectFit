const { Model } = require('objection');
const knex = require('./knex');

Model.knex(knex);

class ForumCategory extends Model {
  static get tableName() {
    return 'forum_categories';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'description'],
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
          from: 'forum_categories.id',
          to: 'forum_sub_categories.id_category',
        },
      },
    };
  }
}

module.exports = ForumCategory;
