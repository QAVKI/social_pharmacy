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
  console.log(req.body)
  const drug = await Drug.update({
    count: req.body.count - 1,
  }, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  });
  res.json({ isUpdateSuccessful: true, entryID: drug[1].id });
});

module.exports = route;
