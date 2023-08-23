
const {
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_PORT
} = process.env;

const config = {
  "development": {
    "username": MYSQL_USER,
    "password": MYSQL_PASSWORD,
    "database": `${MYSQL_DATABASE}_development`,
    "host": MYSQL_HOST,
    "port": MYSQL_PORT,
    "dialect": "mysql"
  },
  "test": {
    "username": MYSQL_USER,
    "password": MYSQL_PASSWORD,
    "database": `${MYSQL_DATABASE}_test`,
    "host": MYSQL_HOST,
    "port": MYSQL_PORT,
    "dialect": "mysql"
  },
  "production": {
    "username": MYSQL_USER,
    "password": MYSQL_PASSWORD,
    "database": `${MYSQL_DATABASE}_production`,
    "host": MYSQL_HOST,
    "port": MYSQL_PORT,
    "dialect": "mysql"
  }
};

module.exports = config;