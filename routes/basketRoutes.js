const express = require('express');

const route = express.Router();

const { Basket, Drug, Select } = require('../db/models');

const render = require('../lib/render');
const BasketViews = require('../views/BasketViews');

route.get('/', (req, res) => {
  // Drug.findAll({ raw: true });
  const user = req.session.newUser;
  render(BasketViews, { title: 'basket', user }, res);
});

module.exports = route;