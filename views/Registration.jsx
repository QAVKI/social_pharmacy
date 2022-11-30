const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <div className="container mt-5">
        <h2>Регистрация</h2>
        <form id="signupForm" method="POST" action="/auth/registration">
          <div className="form-group">
            <label htmlFor="login">Логин:</label>
            <input
              id="login"
              className="form-control"
              name="login"
              type="text"
              required
              pattern="[A-Za-z]\w+"
              minLength={4}
              title="Латинские буквы, цифры. Имя должно начинаться с буквы"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              className="form-control"
              name="email"
              type="text"
              pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z.-]+\.[A-Za-z]{2,}$"
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
              minLength={3}
            />
          </div>
          <button type="submit" className="btn-light">
            Зарегистрироваться
          </button>
        </form>
        {/* <script src='/js/signup.js'/> */}
      </div>
    </Layout>
  );
}

module.exports = Registration;
