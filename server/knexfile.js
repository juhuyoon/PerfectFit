// Update with your config settings.

const migrations = {
  directory: './database/migrations',
  tableName: 'knex_migrations',
  stub: './database/migration.stub',
};

const seeds = {
  directory: './database/seeds',
};

module.exports = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    migrations,
    seeds,
  },

  development: {
    client: 'postgresql',
    connection: {
      host: 'postgres',
      user: 'postgres',
      password: 'password',
      database: 'perfectfitDB',
    },
    migrations,
    seeds,
    debug: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations,
    seeds,
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations,
  },
};
