const forum_sub1 = {
  id: 1,
  id_category: 1,
  title: 'I want to meme post here',
  description: 'this is some text I want to show',
};

const forum_sub2 = {
  id: 2,
  id_category: 2,
  title: 'This is for something elseee',
  description: ' 1011011 01 this is some text I want to show',
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('forum_sub_categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('forum_sub_categories').insert([forum_sub1, forum_sub2]);
    });
};
