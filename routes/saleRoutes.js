const express = require('express');

const route = express.Router();
const { Drug } = require('../db/models');

const render = require('../lib/render');
const Sale = require('../views/Sale');

route.get('/', async (req, res) => {
  const cards = await Drug.findAll({ raw: true });
  const user = req.session.newUser;
  //console.log('CARDS================>', cards);
  render(Sale, { title: 'sale', cards, user }, res);
});

module.exports = route;
