const express = require('express');

const route = express.Router();

const render = require('../lib/render');

const Registration = require('../views/Registration');

route.get('/', (req, res) => {
  render(Registration, { title: 'well done' }, res);
});

module.exports = route;
