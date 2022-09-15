module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'amora'),
      user: env('DATABASE_USERNAME', 'amora'),
      password: env('DATABASE_PASSWORD', 'amora@1234'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
