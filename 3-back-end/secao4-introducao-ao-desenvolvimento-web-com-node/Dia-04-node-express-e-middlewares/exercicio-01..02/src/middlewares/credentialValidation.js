const fs = require('fs/promises');
const { join } = require('path');
const credentialValidation = async (req, res, next) => {
  const PATH = join(__dirname, '../data/users.json');
  const users = JSON.parse(await fs.readFile(PATH, 'utf-8'));
  const token = req.header('X-AUTHORIZATION');

  if (token?.length !== 16 && !users.some((user) => user.token === token)) {
    return res
      .status(401)
      .json({ "message": "Token inválido!" });
  }

  next();
};

module.exports = credentialValidation;