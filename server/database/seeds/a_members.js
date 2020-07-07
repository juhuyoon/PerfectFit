const members1 = {
  id: 1,
  fullName: 'Jung Yoon',
  userName: 'juhuyoon',
  city: 'Suwanee',
  email: 'juhuyoon@yahoo.com',
  password: 'kappa123',
  accessLevel: 1,
  reason: 'This is my website let me in',
  confirmed: true,
};

const members2 = {
  id: 2,
  fullName: 'Erwins Saget',
  userName: 'erwinsaget',
  city: 'Atlanta',
  email: 'test@gmail.com',
  password: 'best123',
  accessLevel: 1,
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
