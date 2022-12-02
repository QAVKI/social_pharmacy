const express = require('express');

const route = express.Router();
const { Drug, Select, User, Basket } = require('../db/models');

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
  console.log(userInfo);
  if (userInfo) {
    if (userInfo.select1[0] === '+') userInfo.select1.slice(1, userInfo.select1.length);
    if (userInfo.select2[0] === '+') userInfo.select2.slice(1, userInfo.select2.length);
    if (userInfo.select3[0] === '+') userInfo.select3.slice(1, userInfo.select3.length);
    // console.log(userInfo, '-----------------------------------------------')
    render(Home, {
      title: 'home', children, select, user, userInfo,
    }, res);
  } else {
    userInfo = {
      select1: '',
      select2: '',
      select3: '',
    };
    render(Home, {
      title: 'home', children, select, user, userInfo,
    }, res);
  }
});

module.exports = route;
