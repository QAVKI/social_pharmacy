const express = require('express');

const route = express.Router();

const { renderSignIn, loginUser } = require('../controllers/signinControllers');

route
  .get('/', renderSignIn)
  .post('/', loginUser);

module.exports = route;
