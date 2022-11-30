const express = require('express');

const route = express.Router();

route.get('/', async (req, res) => {
  if (req.session.newUser) {
    req.session.destroy(() => {
      res.clearCookie('bears');
      res.redirect('/home');
    });
  } else {
    res.redirect('/home');
  }
});

module.exports = route;
