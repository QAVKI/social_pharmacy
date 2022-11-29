const React = require('react');
const Layout = require('./Layout');

function Auth({title}) {
  return (
    <Layout>
      <div>
        <a href="/auth/registration">Регистрация</a>
        <a href="auth">Авторизация</a>
      </div>
    </Layout>
  );
}

module.exports = Auth;
