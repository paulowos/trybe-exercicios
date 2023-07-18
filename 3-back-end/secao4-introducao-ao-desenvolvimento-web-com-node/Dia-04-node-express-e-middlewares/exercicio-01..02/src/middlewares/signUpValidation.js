const signUpValidation = (req, res, next) => {
  const properties = ['email', 'password', 'firstName', 'phone'];

  let field = undefined;

  properties.forEach((prop) => {
    if (!(prop in req.body)) {
      field = prop;
    }
  });

  if (field) return res
    .status(400)
    .json({ message: `Campo ${field} ausente` });

  next();
};

module.exports = signUpValidation;