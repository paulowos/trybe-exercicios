const fs = require('fs/promises');
const { join } = require('path');

module.exports = async function apiCredentials(req, res, next) {
  const token = req.header('X-API-TOKEN');
  const authdata = await fs.readFile(join(__dirname, '../../authData.json'), { encoding: 'utf-8' });
  const authorized = JSON.parse(authdata);

  if (!(token in authorized)) return res.status(401)
    .json({ message: 'Token inválido ou expirado' });

  req.teams = authorized[token];
  next();
};