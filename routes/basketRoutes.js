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

route.put('/:id', async (req, res) => {
  const drugcount = await Drug.findOne({ where: { id: +req.params.id } });
  // console.log(drugcount);
  console.log(req.session, '---------------------------');
  await Drug.update({
    count: drugcount.count - 1,
  }, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  });
  res.sendStatus(200);
});

module.exports = route;
