const express = require('express');

const route = express.Router();
const { Drug } = require('../db/models');

const render = require('../lib/render');
const Sale = require('../views/Sale');

route.get('/', async (req, res) => {
  const cards = await Drug.findAll({ raw: true });
  const user = req.session.newUser;
  if (user === undefined) {
    render(Sale, { title: 'sale', cards }, res);
  } else {
    render(Sale, { title: 'sale', cards, user }, res);
  }
  //console.log('CARDS================>', cards);
});

module.exports = route;
