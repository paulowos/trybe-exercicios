const { bookService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
    res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Error' });

  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getById(id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Error' });
  }
};

const create = async (req, res) => {
  try {
    const newBook = await bookService.create(req.body);
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Error' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await bookService.update(id, req.body);
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    return res.status(200).json(updatedBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Error' });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.remove(id);
    console.log(book);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    return res.status(204).end();

  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Internal Error' });
  }
};

module.exports = { getAll, getById, create, update, remove };