const express = require('express');

const route = express.Router();
const { Drug, Select, User } = require('../db/models');

const render = require('../lib/render');
const Home = require('../views/Home');

route.get('/', async (req, res) => { // Отрисовка главной страницы
  let user = req.session?.newUser;
  const select = await Select.findAll({
    atttibutes: 'drug_id',
    raw: true,
    include: [
      {
        model: Drug,
      },
    ],
  });
  if (user === undefined) {
    user = '';
  }
  let userInfo = await User.findOne({ where: { login: user } });
  const children = await Drug.findAll({ raw: true });
  if (userInfo) {
    render(Home, {
      title: 'home', children, select, user, userInfo,
    }, res);
  } else {
    userInfo = {
      select1: '',
      select2: '',
      select3: '',

    }
    render(Home, {
      title: 'home', children, select, user, userInfo,
    }, res);
  }
});

module.exports = route;
