const React = require('react');
const Layout = require('./Layout');

function Sale({ title, cards }) {
  const saleCards = cards.filter(el => el.sale > 0)
  return (
    <Layout>
      <div className="container row row-cols-1 row-cols-md-2 g-4">
        {saleCards.map((el) => (
          <div data-log="1" id={`${el.sale > 0}`} className="card ">
            <img src={`${el.logo}`} className="card-img-top" alt="" />
            <div className="card-body">
              <h5>{el.title}</h5>
              <p className="price">Цена: {el.price} рублей</p>
              <p>Цена на сегодня: <strong>{el.price * (el.sale / 100)}</strong> рублей</p>
              <p>В наличии: {el.count}</p>
              <button type="button" className="btn btn-info">Купить</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Sale;
