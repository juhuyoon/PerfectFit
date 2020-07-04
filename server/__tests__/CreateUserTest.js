const request = require('supertest');
const config = require('config');
const faker = require('faker');
const knex = require('knex')(config.get('knex'));
const app = require('../src/app');

beforeEach(async () => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  await knex.seed.run();
});

afterAll(async (done) => {
  await knex.destroy();
  done();
});

describe('Creating a user', () => {
  it('creates a user given a perfect scenario', async () => {
    const email = faker.internet.email();
    const res = await request(app).post('/members').send({
      full_name: faker.name.findName(),
      username: faker.internet.userName(),
      email,
      password: 'secret',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('email', email);
    expect(res.body).not.toHaveProperty('password');
  });
});
