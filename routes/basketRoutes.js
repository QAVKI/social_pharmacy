const express = require('express');

const route = express.Router();

const { Basket, Drug, Select, User } = require('../db/models');

const render = require('../lib/render');
const BasketViews = require('../views/BasketViews');

route.get('/', async (req, res) => {
  let user = req.session.newUser;

  if (user === undefined) user = '';

  const userdb = await User.findOne({ where: { login: user } });
  let basket;

  if (userdb !== null) {
    basket = await Basket.findAll({
      where: { user_id: userdb.id },
      include: [
        {
          model: Drug,
        },
      ],
      raw: true,
    });
    if (basket) {
      for (let i = 0; i < basket.length; i += 1) {
        if (userdb.select1 === basket[i]['Drug.title']) basket[i]['Drug.price'] = Math.round(basket[i]['Drug.price'] * (basket[i].count - 1)) / (basket[i].count);
        if (userdb.select2 === basket[i]['Drug.title']) basket[i]['Drug.price'] = Math.round(basket[i]['Drug.price'] * (basket[i].count - 1)) / (basket[i].count);
        if (userdb.select3 === basket[i]['Drug.title']) basket[i]['Drug.price'] = Math.round(basket[i]['Drug.price'] * (basket[i].count - 1)) / (basket[i].count);
      }
    }
  } else {
    basket = [{
      'Drug.sale': 200,
      'Drug.logo': '',
      id: '',
      count: '',
      'Drug.title': '',
      'Drug.price': '',
    }];
  }
  render(BasketViews, { title: 'basket', user, basket }, res);
});

route.put('/:id', async (req, res) => {
  const drugcount = await Drug.findOne({ where: { id: +req.params.id } });
  if (req.session.newUser) {
    await Drug.update({
      count: drugcount.count - 1,
    }, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    const user = await User.findOne({ where: { login: req.session.newUser } });
    const dublicate = await Basket.findOne({ where: { user_id: user.id, drug_id: +req.params.id }});
    if (dublicate === null) {
      await Basket.create({ user_id: user.id, drug_id: +req.params.id, count: 1 });
    } else {
      const basket = await Basket.findOne({ where: { user_id: user.id, drug_id: +req.params.id } });

      await Basket.update({
        count: basket.count + 1,
      }, {
        where: { user_id: user.id, drug_id: +req.params.id },
        returning: true,
        plain: true,
      });
    }
  }
  res.sendStatus(200);
});

route.put('/select/:id', async (req, res) => {
  if (req.session.newUser !== undefined) {
    const drugcount = await Drug.findOne({ where: { title: req.params.id } });
    const drugid = drugcount.id;
    const user = await User.findOne({ where: { login: req.session.newUser } });
    const dublicate = await Basket.findOne({ where: { user_id: user.id, drug_id: drugid } });
    if (dublicate === null) {
      await Basket.create({ user_id: user.id, drug_id: drugid, count: 1 });
    } else {
      const basket = await Basket.findOne({ where: { user_id: user.id, drug_id: drugid } });
      await Basket.update({
        count: basket.count + 1,
      }, {
        where: { user_id: user.id, drug_id: drugid },
        returning: true,
        plain: true,
      });
    }
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

route.delete('/', async (req, res) => {
  if (req.session.newUser !== undefined) {
    const user = await User.findOne({ where: { login: req.session.newUser } });
    await Basket.destroy({ where: { user_id: user.id }, returning: true, plain: true });
  }
});

module.exports = route;
