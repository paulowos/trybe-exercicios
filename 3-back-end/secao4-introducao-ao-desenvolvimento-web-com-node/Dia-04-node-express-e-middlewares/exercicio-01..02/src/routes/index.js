const express = require('express');
const activities = require('./activities.router');
const signUp = require('./signUp.router');

const routers = express.Router();

routers.use('/activities', activities);
routers.use('/signup', signUp);

module.exports = routers;