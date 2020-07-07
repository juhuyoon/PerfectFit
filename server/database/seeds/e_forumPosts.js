const post1 = {
  id: 1,
  idSubCategory: 1,
  idUser: 1,
  content: 'this is the content of the post yo',
};

const post2 = {
  id: 2,
  idSubCategory: 2,
  idUser: 2,
  content: 'This is the best content ever!',
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('forumPosts')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('forumPosts').insert([post1, post2]);
    });
};
