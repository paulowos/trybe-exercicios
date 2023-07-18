const express = require('express');
const fs = require('fs/promises');
const { join } = require('path');
const generateToken = require('../utils/tokenGenerator');
const signUpValidation = require('../middlewares/signUpValidation');

const router = express.Router();

router.use(signUpValidation);

router.post('/', async (req, res) => {
  const PATH = join(__dirname, '../data/users.json');
  const data = JSON.parse(await fs.readFile(PATH, 'utf-8'));
  const token = generateToken();
  const newData = { token, ...req.body };
  data.push(newData);
  await fs.writeFile(PATH, JSON.stringify(data));

  res.status(200).json({ token });
});

module.exports = router;