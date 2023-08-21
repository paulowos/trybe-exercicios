const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async (data) => {
  const newBook = await Book.create(data);
  return newBook;
};

const update = async (id, data) => {
  const [updatedBook] = await Book.update(data, { where: { id } });
  return updatedBook;
};

const remove = async (id) => {
  const book = await Book.destroy({ where: { id } });
  return book;
};

module.exports = { getAll, getById, create, update, remove };
