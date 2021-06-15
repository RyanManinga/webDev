const express = require('express');
const morgan = require('morgan');
const homeRoutes = require('../routes/home');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use('/', homeRoutes);


module.exports = app;