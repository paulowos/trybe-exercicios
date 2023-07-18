const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const verifyID = require('./middlewares/verifyId');
const apiCredentials = require('./middlewares/apiCredentials');
const teams = require('./data/teams');
require('express-async-errors');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(apiCredentials);
app.use(express.json());

let nextId = 3;

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', verifyID, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    res.json(team);
  } else {
    res.sendStatus(404);
  }
});

app.post('/teams', validateTeam, (req, res) => {
  const { sigla } = req.body;
  const { teams: authorizedTeams } = req.teams;

  if (!authorizedTeams.includes(sigla)) return res
    .status(401)
    .json({ message: 'Não autorizado a criar esse time' });

  if (teams.some((team) => team.sigla === sigla)) return res
    .status(422)
    .json({ message: 'Já existe um time com essa sigla' });

  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', verifyID, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  const updated = { id, ...req.body };
  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', verifyID, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(204);
});

module.exports = app;