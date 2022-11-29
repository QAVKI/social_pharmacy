const express = require('express');

const route = express.Router();

const render = require('../lib/render');

const Authentication = require('../views/Authentication');

route.get('/', (req, res) => {
  render(Authentication, { title: 'well done' }, res);
});

module.exports = route;
