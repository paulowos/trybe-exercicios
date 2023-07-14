const express = require('express');
const teams = require('../data/teams');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

// app.get('/send', (req, res) => res.send('<h1>Olá Mundo!</h1>'));
// app.get('/redirect', (req, res) => res.redirect('https://www.betrybe.com/'));
// app.get('/end', (req, res) => res.end());

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);
  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    return res.status(404).json({ message: 'Team not Found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;

  res.status(200).json({ updateTeam });
});

app.get('/teams/:id', (req, res) => {
  const { id } = req.params;

  const teamInfo = teams.find((team) => team.id === Number(id));

  if (!teamInfo) return res.status(404).json({ message: 'Team not Found' });

  res.status(200).json(teamInfo);
});

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;

  const arrayPosition = teams.findIndex((team) => team.id === Number(id));

  if (arrayPosition < 0) return res.status(404).json({ message: 'Team not Found' });

  teams.splice(arrayPosition, 1);

  res.status(200).end();
});

module.exports = app;