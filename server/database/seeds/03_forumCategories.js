const forum_category1 = {
  id: 1,
  title: 'general',
  description: 'a place to meme at',
};

const forum_category2 = {
  id: 2,
  title: 'resources',
  description: 'a place to meme at with resources',
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('forum_categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('forum_categories').insert([
        forum_category1,
        forum_category2,
      ]);
    });
};
