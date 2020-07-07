const forumCategory1 = {
  id: 1,
  title: 'general',
  description: 'a place to meme at',
};

const forumCategory2 = {
  id: 2,
  title: 'resources',
  description: 'a place to meme at with resources',
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('forumCategories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('forumCategories').insert([forumCategory1, forumCategory2]);
    });
};
