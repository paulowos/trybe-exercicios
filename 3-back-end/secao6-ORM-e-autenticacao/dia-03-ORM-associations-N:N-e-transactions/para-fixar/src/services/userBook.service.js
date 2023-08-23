const { userModel, bookModel } = require('../models');

const getUsersBooksById = id => userModel.findOne({
  where: { id },
  include: [{ model: bookModel, as: 'books', through: { attributes: [] } }]
});

module.exports = {
  getUsersBooksById
};