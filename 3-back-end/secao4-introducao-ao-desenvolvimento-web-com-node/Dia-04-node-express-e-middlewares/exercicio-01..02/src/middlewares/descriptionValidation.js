const descriptionValidation = (req, res, next) => {
  if (!('description' in req.body)) return res
    .status(400)
    .json({ "message": "O campo description é obrigatório" });

  const { description } = req.body;

  const properties = ['rating', 'difficulty', 'createdAt'];

  properties.forEach((prop) => {
    if (!(prop in description)) return res
      .status(400)
      .json({ message: `O campo ${prop} é obrigatório` });
  });

  next();
};

module.exports = descriptionValidation;