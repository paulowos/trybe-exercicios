const { bookModel } = require('../models');
const getAll = async () => {
  const books = await bookModel.findAll({
    order: [['title', 'ASC']]
  });
  return books;
};

const getById = async (id) => {
  const book = await bookModel.findByPk(id);
  return book;
};

const create = async (data) => {
  const newBook = await bookModel.create(data);
  return newBook;
};

const update = async (id, data) => {
  const [updatedBook] = await bookModel.update(data, { where: { id } });
  return updatedBook;
};

const remove = async (id) => {
  const book = await bookModel.destroy({ where: { id } });
  return book;
};

const getByAuthor = async (author) => {
  const books = await bookModel.findAll({
    where: { author },
    order: [['title', 'ASC']]
  });
  return books;
};



module.exports = { getAll, getById, create, update, remove, getByAuthor };
