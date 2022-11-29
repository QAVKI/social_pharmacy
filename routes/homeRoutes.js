const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const Home = require('../views/Home');

route.get('/', (req, res) => {
  render(Home, { title: 'home' }, res);
});

module.exports = route;
