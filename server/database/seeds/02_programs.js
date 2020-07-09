const test_programs = {
  id: 1,
  name: 'Emory Autism Center',
  address: 'Emory University',
  phone_num: '123-456-7890',
  prices: 100.05,
  services: 'This is some text here to save and store',
  reviews: 'This is some text here to save and store for reviews',
  stars: 5,
  accepted: true,
};
const test_programs2 = {
  id: 2,
  name: 'Autism Clinic',
  address: 'Duluth',
  phone_num: '789-123-4567',
  prices: 10.0,
  services: 'This is some text here to save and store',
  reviews: 'This is some text here to save and store for reviews',
  stars: 3,
  accepted: false,
};
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('programs')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('programs').insert([test_programs, test_programs2]);
    });
};
