const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const BasketViews = require('../views/Basket');

const { Basket, Drug } = require('../db/models');

route.get('/', (req, res) => {
  render(BasketViews, { title: 'basket' }, res);
});



module.exports = route;
