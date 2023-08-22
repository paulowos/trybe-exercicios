const express = require('express');

const { employeeController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/employees', employeeController.getAll);

app.get('/employees/:id', employeeController.getById);

module.exports = app;
