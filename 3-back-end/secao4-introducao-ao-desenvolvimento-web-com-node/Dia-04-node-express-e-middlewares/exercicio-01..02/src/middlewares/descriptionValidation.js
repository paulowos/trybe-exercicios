const descriptionValidation = (req, res, next) => {
  if (!('description' in req.body)) return res
    .status(400)
    .json({ "message": "O campo description é obrigatório" });

  const { description } = req.body;

  let field = undefined;

  const properties = ['rating', 'difficulty', 'createdAt'];

  properties.forEach((prop) => {
    if (!(prop in description)) {
      field = prop;
    }
  });

  if (field) return res
    .status(400)
    .json({ message: `O campo ${field} é obrigatório` });

  next();
};

module.exports = descriptionValidation;