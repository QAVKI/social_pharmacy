const express = require('express');

const route = express.Router();
const { Drug } = require('../db/models');

const render = require('../lib/render');
const Home = require('../views/Home');

route.get('/', async (req, res) => {
  const user = req.session.newUser;
  const children = await Drug.findAll({ raw: true });
  console.log(children);
  render(Home, { title: 'home', children, user }, res);
});

module.exports = route;
