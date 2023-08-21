const validateDate = require('validate-date');
const createdAtValidation = (req, res, next) => {

  const { createdAt } = req.body.description;

  const validation = validateDate(
    createdAt,
    responseType = 'boolean',
    dateFormat = 'dd/mm/yyyy'
  );

  if (!validation) return res
    .status(400)
    .json({
      "message":
        "O campo createdAt deve ter o formato 'dd/mm/aaaa' e ser uma data válida"
    });

  next();
};

module.exports = createdAtValidation;