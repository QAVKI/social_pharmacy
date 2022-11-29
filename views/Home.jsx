const React = require('react');
const Layout = require('./Layout');

function Home({ title, children }) {
  return (
    <Layout>
      <div key={Math.random() * 999999} className="container row row-cols-1 row-cols-md-2 g-4">
        {children.map((el) => (
          <div className="card w-75 col">
            <img src={`${el.logo}`} className="card-img-top" alt="" />
            <div className="card-body">
              <h5>{el.title}</h5>
              <p className="price">Цена: {el.price} рублей</p>
              <p>
                Цена на сегодня:<br /><strong>{Math.round(el.price * (1 - el.sale * 0.01))}</strong> рублей</p>
              <p>
                В наличии: {el.count}</p>
              <button type="button" className="btn btn-info">Купить</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Home;
