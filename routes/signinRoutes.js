const express = require('express');

const route = express.Router();

const render = require('../lib/render');

const Signin = require('../views/Signin');

route.get('/', (req, res) => {
  render(Signin, { title: 'well done' }, res);
});

module.exports = route;
