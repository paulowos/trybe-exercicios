const express = require('express');
const { userBookController } = require('./controllers');

const app = express();
app.use(express.json());

app.get('/usersBooks/:id', userBookController.getUsersBooksById);

module.exports = app;


