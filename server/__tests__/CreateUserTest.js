const request = require('supertest');
const config = require('config');
const faker = require('faker');
const knex = require('knex')(config.get('knex'));
const app = require('../src/app');
const Member = require('../src/models/Member');

beforeEach(async () => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  await knex.seed.run();
});

afterAll(async (done) => {
  await knex.destroy();
  done();
});

async function makePostRequest(url, attributes = {}) {
  if (!url) {
    throw new Error(`No url was provided`);
  }

  const res = await request(app).post(url).send(attributes);

  return { res };
}

describe('Creating a user', () => {
  test('it creates a user given a perfect scenario', async () => {
    const email = faker.internet.email();
    const full_name = faker.name.findName();
    const username = faker.internet.userName();

    const { res } = await makePostRequest('/members', {
      full_name,
      username,
      email,
      password: 'password',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('full_name', full_name);
    expect(res.body).toHaveProperty('username', username);
    expect(res.body).not.toHaveProperty('password');
  });

  test('it returns an error if no name is given', async () => {
    const email = faker.internet.email();
    const username = faker.internet.userName();

    const { res } = await makePostRequest('/members', {
      username,
      email,
      password: 'password',
    });

    expect(res.statusCode).toBe(422);
    expect(res.body).toHaveProperty('errors');
    expect(res.body.errors).toContainEqual({
      msg: 'Please provide your name.',
      param: 'full_name',
      location: 'body',
    });
  });

  test('it returns an error if no password is given', async () => {
    const email = faker.internet.email();
    const username = faker.internet.userName();
    const full_name = faker.name.findName();

    const { res } = await makePostRequest('/members', {
      username,
      email,
      full_name,
    });

    expect(res.statusCode).toBe(422);
    expect(res.body).toHaveProperty('errors');
    expect(res.body.errors).toContainEqual({
      msg: 'Please provide a password that is at least 7 characters long',
      param: 'password',
      location: 'body',
    });
  });

  test('it returns an error if password given is too short', async () => {
    const email = faker.internet.email();
    const username = faker.internet.userName();
    const full_name = faker.name.findName();

    const { res } = await makePostRequest('/members', {
      username,
      email,
      full_name,
      password: 'secret', // Only 6 characters
    });

    expect(res.statusCode).toBe(422);
    expect(res.body).toHaveProperty('errors');
    expect(res.body.errors).toContainEqual({
      msg: 'Please provide a password that is at least 7 characters long',
      param: 'password',
      location: 'body',
      value: 'secret',
    });
  });

  test('it returns an error if no email is given', async () => {
    const username = faker.internet.userName();
    const full_name = faker.name.findName();

    const { res } = await makePostRequest('/members', {
      username,
      full_name,
      password: 'password',
    });

    expect(res.statusCode).toBe(422);
    expect(res.body).toHaveProperty('errors');
    expect(res.body.errors).toContainEqual({
      msg: 'Invalid value',
      param: 'email',
      location: 'body',
    });
  });

  test('it returns an error if email is taken', async () => {
    const email = faker.internet.email();
    const full_name = faker.name.findName();
    const username = faker.internet.userName();

    await Member.query().insert({
      email,
      full_name: faker.name.findName(),
      username: faker.internet.userName(),
      password: 'password',
    });

    const { res } = await makePostRequest('/members', {
      email,
      full_name: faker.name.findName(),
      username: faker.internet.userName(),
      password: 'password',
    });

    expect(res.statusCode).toBe(422);
    expect(res.body).toHaveProperty('errors');
    expect(res.body.errors).toContain({
      msg: 'That E-mail address is already in use',
      param: 'email',
      location: 'body',
    });
  });

  test.todo('it returns an error if no username is given');

  test.todo('it returns an error if username is taken');
});
