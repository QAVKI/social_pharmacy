const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const BasketViews = require('../views/Basket');

const { Basket, Drug } = require('../db/models');

route.get('/', (req, res) => {
  const user = req.session.newUser;
  render(BasketViews, { title: 'basket', user }, res);
});



module.exports = route;
