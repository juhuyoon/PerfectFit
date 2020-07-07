const testPrograms = {
  id: 1,
  name: 'Emory Autism Center',
  address: 'Emory University',
  phoneNum: '123-456-7890',
  prices: 100.05,
  services: 'This is some text here to save and store',
  reviews: 'This is some text here to save and store for reviews',
  stars: 5,
  accepted: true,
};
const testPrograms2 = {
  id: 2,
  name: 'Autism Clinic',
  address: 'Duluth',
  phoneNum: '789-123-4567',
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
      return knex('programs').insert([testPrograms, testPrograms2]);
    });
};
