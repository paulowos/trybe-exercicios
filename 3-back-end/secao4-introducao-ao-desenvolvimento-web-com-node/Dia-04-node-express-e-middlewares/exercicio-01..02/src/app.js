const express = require('express');
const routers = require('./routes');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(routers);

module.exports = app;