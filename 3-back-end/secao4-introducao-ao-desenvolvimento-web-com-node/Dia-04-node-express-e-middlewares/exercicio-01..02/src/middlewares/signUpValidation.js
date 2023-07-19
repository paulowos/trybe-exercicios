const z = require('zod');
// const signUpValidation = (req, res, next) => {
//   const properties = ['email', 'password', 'firstName', 'phone'];

//   let field = undefined;

//   properties.forEach((prop) => {
//     if (!(prop in req.body)) {
//       field = prop;
//     }
//   });

//   if (field) return res
//     .status(400)
//     .json({ message: `Campo ${field} ausente` });

//   next();
// };

const User = z.object({
  email: z.string().email(),
  password: z.string(),
  firstName: z.string(),
  phone: z.string()

});
const signUpValidation = (req, res, next) => {

  const verification = User.safeParse(req.body);

  if (!verification.success) {
    const errors = verification.error.issues
      .map(({ path }) => path);

    return res.status(400).json({ message: `Campo(s) ${errors.join(' e ')} ausente` });
  }

  next();
};

module.exports = signUpValidation;