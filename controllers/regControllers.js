const bcrypt = require('bcrypt');
const render = require('../lib/render');
const Registration = require('../views/Registration');

const { User } = require('../db/models');

const renderRegister = (req, res) => {
  render(Registration, null, res);
};

const regUser = async (req, res) => {
  const { login, password, email } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ login, password: hash, email });
    console.log('новый юзер======>>>>>>>>>>>>>', newUser);
    req.session.newUser = newUser.login;
    req.session.save(() => {
      res.redirect('/home');
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { renderRegister, regUser };
