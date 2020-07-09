const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('members')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('members').insert([
        {
          full_name: faker.name.findName(),
          username: faker.internet.userName(),
          email: faker.internet.email(),
          password: 'secret',
        },
      ]);
    });
};
