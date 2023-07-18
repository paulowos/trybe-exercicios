const express = require('express');
const activities = require('./activities.router');

const routers = express.Router();

routers.use('/activities', activities);

module.exports = routers;