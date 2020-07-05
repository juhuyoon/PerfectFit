const forumSub1 = {
  id: 1,
  idCategory: 1,
  title: 'I want to meme post here',
  description: 'this is some text I want to show',
};

const forumSub2 = {
  id: 2,
  idCategory: 2,
  title: 'This is for something elseee',
  description: ' 1011011 01 this is some text I want to show',
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('forumSubCategories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('forumSubCategories').insert([forumSub1, forumSub2]);
    });
};
