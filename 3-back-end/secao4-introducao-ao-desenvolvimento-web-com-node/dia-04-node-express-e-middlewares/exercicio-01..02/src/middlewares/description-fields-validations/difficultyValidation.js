const difficultyValidation = (req, res, next) => {
  const { difficulty } = req.body.description;
  const options = ['Fácil', 'Médio', 'Difícil'];

  if (!options.some((option) => option === difficulty)) return res
    .status(400)
    .json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });

  next();
};

module.exports = difficultyValidation;