const express = require('express');
const { readFile, writeFile, updateFile, deleteData } = require('./utils/handleFile');
const app = express();

app.use(express.json());

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const data = await readFile();

    if (q) {
      const result = data.filter(({ movie }) => movie.toLowerCase().includes(q.toLowerCase()));
      return res.status(200).json(result);
    }

    return res.status(404).json({ error: 'Not Found' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;

  const data = await readFile();

  const movie = data.find((movie) => movie.id === Number(id));

  if (!movie) return res.status(404).json({ error: 'Not Found' });

  res.status(200).json(movie);

});

app.get('/movies', async (req, res) => {
  const data = await readFile();
  res.status(200).json(data);
});

app.post('/movies', async (req, res) => {
  const newMovie = req.body;
  const keys = Object.keys(newMovie);
  if (keys.includes('movie') && keys.includes('price') && keys.length === 2) {
    const response = await writeFile(newMovie);
    return res.status(200).json(response);
  }
  res.status(400).json({ error: 'Body format invalid' });
});

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const keys = Object.keys(body);
  if (!(keys.includes('movie') && keys.includes('price') && keys.length === 2)) {
    res.status(400).json({ error: 'Body format invalid' });
  }
  const response = await updateFile(id, body);

  if (!response) return res.status(404).json({ error: 'Id Not Found' });

  return res.status(200).json(response);
});

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const response = await deleteData(id);
  if (!response) return res.status(404).json({ error: 'Id Not Found' });
  res.status(200).end();
});



module.exports = app


