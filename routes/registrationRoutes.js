const express = require('express');

const route = express.Router();

const { renderRegister, regUser } = require('../controllers/regControllers');

route
  .get('/', renderRegister)
  .post('/', regUser);

module.exports = route;
