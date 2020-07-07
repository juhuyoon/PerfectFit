const { Model } = require('./knex');

class ForumPost extends Model {
  static get tableName() {
    return 'forumPosts';
  }
  //   $beforeInsert(context) {
  //       this.idSubCategory =
  //   }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
    };
  }
}

module.exports = ForumPost;
