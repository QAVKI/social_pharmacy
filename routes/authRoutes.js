const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const Auth = require('../views/Auth');

route.get('/', (req, res) => {
  render(Auth, { title: 'well done' }, res);
});

module.exports = route;
