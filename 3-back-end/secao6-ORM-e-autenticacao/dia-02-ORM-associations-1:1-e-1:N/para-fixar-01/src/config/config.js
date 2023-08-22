const { env } = process;
const config = {
  username: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DATABASE,
  host: env.MYSQL_HOST,
  port: env.MYSQL_PORT,
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
