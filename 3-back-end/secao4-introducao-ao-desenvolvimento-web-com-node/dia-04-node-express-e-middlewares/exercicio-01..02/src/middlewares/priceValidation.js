const priceValidation = (req, res, next) => {
  if (!('price' in req.body)) return res
    .status(400)
    .json({ message: 'O campo price é obrigatório' });

  const price = Number(req.body.price);

  if (price < 0 || Number.isNaN(price)) return res
    .status(400)
    .json({ message: 'O campo price deve ser um numero maior ou igual a zero' });

  next();
};

module.exports = priceValidation;