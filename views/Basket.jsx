const React = require('react');
const Layout = require('./Layout');

function Basket({user}) {
  return (
    <Layout user={user}>

      <div className="basket">
        <h1>Корзина</h1>
        <div className="jsBasCard d-sm-flex flex-row flex-wrap justify-content-center" />
        <div className="d-sm-flex flex-column flex-wrap align-item-center text-center">
          <p className="fs-5">
            Скидка:
          </p>
          <p className="fs-5">
            Итого:

          </p>
          <button type="button" className="btn-success" data-total="{{total}}">Оформить заказ</button>
        </div>

      </div>
    </Layout>
  );
}

module.exports = Basket;
