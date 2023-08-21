const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { bookController } = require('./controllers');

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

app.get('/books', bookController.getAll);

app.get('/books/:id', bookController.getById);

app.post('/books', bookController.create);

app.put('/books/:id', bookController.update);

app.delete('/books/:id', bookController.remove);