const express = require('express');

const route = express.Router();
const { Drug, Select } = require('../db/models');

const render = require('../lib/render');
const Home = require('../views/Home');

route.get('/', async (req, res) => {
  const user = req.session.newUser;
  const select = await Select.findAll({
    atttibutes: 'drug_id',
    raw: true,
    include: [
      {
        model: Drug,
      },
    ],
  });
  const children = await Drug.findAll({ raw: true });
  // console.log(children);
  render(Home, { title: 'home', children, select, user }, res);
});

module.exports = route;
