const post1 = {
  id: 1,
  id_sub_category: 1,
  id_user: 1,
  content: 'this is the content of the post yo',
};

const post2 = {
  id: 2,
  id_sub_category: 2,
  id_user: 2,
  content: 'This is the best content ever!',
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('forum_posts')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('forum_posts').insert([post1, post2]);
    });
};
