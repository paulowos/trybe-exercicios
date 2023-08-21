const teams = require('../data/teams');
const verifyID = (req, res, next) => {
  const id = Number(req.params.id);

  if (!teams.some((team) => team.id === id)) return res.status(400)
    .json({ message: 'Time não encontrado' });

  next();
};

module.exports = verifyID;