const nameValidation = (req, res, next) => {
  if (!('name' in req.body)) return res
    .status(400)
    .json({ message: 'O campo nome é obrigatório' });

  const { name } = req.body;

  if (name.length < 4) return res
    .status(400)
    .json({ message: 'O campo name deve ter pelo menos 4 caracteres' });

  next();
};

module.exports = nameValidation;