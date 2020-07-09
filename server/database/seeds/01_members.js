const members1 = {
  id: 1,
  full_name: 'Jung Yoon',
  username: 'juhuyoon',
  city: 'Suwanee',
  email: 'juhuyoon@yahoo.com',
  password: 'kappa123',
  access_level: 1,
  reason: 'This is my website let me in',
  confirmed: true,
};

const members2 = {
  id: 2,
  full_name: 'Erwins Saget',
  username: 'erwinsaget',
  city: 'Atlanta',
  email: 'test@gmail.com',
  password: 'best123',
  access_level: 1,
  reason: 'This is my website let me in too',
  confirmed: true,
};

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('members')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([members1, members2]);
    });
};
