const express = require('express');
const cacauTrybe = require('./cacauTrybe');

const app = express();

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const result = await cacauTrybe.getChocolatesByName(name);
  if (result.length === 0) return res.status(404).json(result);
  res.status(200).json(result);
});

app.get('/chocolates/total', async (req, res) => {
  const totalChocolates = await cacauTrybe.getTotal();
  res.status(200).json({ totalChocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

module.exports = app;