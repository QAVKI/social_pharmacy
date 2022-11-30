const express = require('express');

const route = express.Router();
const { Drug } = require('../db/models');

const render = require('../lib/render');
const Sale = require('../views/Sale');

route.get('/', async (req, res) => {
  const cards = await Drug.findAll({ raw: true });
  //console.log('CARDS================>', cards);
  render(Sale, { title: 'sale', cards }, res);
});

module.exports = route;
