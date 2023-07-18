const express = require('express');
const fs = require('fs/promises');
const { join } = require('path');

//Validation Middlewares
const nameValidation = require('../middlewares/nameValidation');
const priceValidation = require('../middlewares/priceValidation');
const descriptionValidation = require('../middlewares/descriptionValidation');
const createdAtValidation = require('../middlewares/description-fields-validations/createdAtValidation');
const ratingValidation = require('../middlewares/description-fields-validations/ratingValidation');
const difficultyValidation = require('../middlewares/description-fields-validations/difficultyValidation');

const router = express.Router();

router.use(nameValidation);
router.use(priceValidation);
router.use(descriptionValidation);
router.use(createdAtValidation);
router.use(ratingValidation);
router.use(difficultyValidation);


router.post('/', async (req, res) => {
  const PATH = join(__dirname, '../data/activities.json');
  const data = JSON.parse(await fs.readFile(PATH, 'utf-8'));
  data.push(req.body);
  await fs.writeFile(PATH, JSON.stringify(data));

  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;