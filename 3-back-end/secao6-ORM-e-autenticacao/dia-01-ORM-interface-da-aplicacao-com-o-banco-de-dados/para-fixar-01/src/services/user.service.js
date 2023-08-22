const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

console.log(getAll());

module.exports = { getAll };