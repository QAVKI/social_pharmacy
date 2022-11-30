const React = require('react');
const Layout = require('./Layout');

function Signin() {
  return (
    <Layout>
      <div className="container mt-5">
        <h2>Вход на сайт</h2>
        <form id="signinForm" method="POST" action="/auth/signin">
          <div className="form-group">
            <label htmlFor="username">Логин:</label>
            <input
              id="login"
              className="form-control"
              name="login"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input
              id="password"
              className="form-control"
              name="password"
              type="password"
              required
            />
          </div>
          <button type="submit" className="btn-light">
            Войти
          </button>
        </form>
        {/* <script src="/js/signin.js" /> */}
      </div>
    </Layout>
  );
}

module.exports = Signin;
