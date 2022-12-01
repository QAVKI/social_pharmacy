const express = require('express');

const route = express.Router();

const { Basket, Drug, Select, User } = require('../db/models');

const render = require('../lib/render');
const BasketViews = require('../views/BasketViews');

route.get('/', (req, res) => {
  // Drug.findAll({ raw: true });
  let user = req.session.newUser;
  if (user === undefined) user = '';
  render(BasketViews, { title: 'basket', user }, res);
});

route.put('/:id', async (req, res) => {
  const drugcount = await Drug.findOne({ where: { id: +req.params.id } });
  // console.log(drugcount);
  // console.log(req.session, '---------------------------');
  await Drug.update({
    count: drugcount.count - 1,
  }, {
    where: { id: req.params.id },
    returning: true,
    plain: true,
  });
  res.sendStatus(200);
});

route.put('/select/:id', async (req, res) => {
  // console.log(req.params.id);
  // console.log(req.session.newUser);
  if (req.session.newUser !== undefined) {
    const user = await User.findOne({ where: { login: req.session.newUser } });
    if (user.select1 === '') {
      await User.update({
        select1: req.params.id,
      }, {
        where: { id: user.id },
        returning: true,
        plain: true,
      });
    } else if (user.select2 === '') {
      await User.update({
        select2: req.params.id,
      }, {
        where: { id: user.id },
        returning: true,
        plain: true,
      });
    } else if (user.select3 === '') {
      await User.update({
        select3: req.params.id,
      }, {
        where: { id: user.id },
        returning: true,
        plain: true,
      });
    }
  }
});

module.exports = route;
