const React = require('react');
const Layout = require('./Layout');

function Sale({ title, cards, user }) {
  const saleCards = cards.filter(el => el.sale > 0)
  return (
    <Layout user={user}>
      <div id="shop-container" className="container row row-cols-1 row-cols-md-2 g-4">
        {saleCards.map((el) => (
          <div data-id={el.id} id={`${el.sale > 0}`} className="card ">
            <img src={`${el.logo}`} className="card-img-top" alt="" />
            <p className="card-body">
              <h5>{el.title}</h5>
              <p className="price">Цена: {el.price} рублей</p>
              <p>Цена на сегодня: <strong>{Math.round(el.price * (1 - el.sale * 0.01))}</strong> рублей</p>
              <p>В наличии: {el.count}</p>
              <button id={user} type="button" className="btn-info">Купить</button>
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Sale;
