const React = require('react');
const Layout = require('./Layout');

function Home({ title, children }) {
  return (
    <Layout>
      {/* <div className="container raw">
        <div data-log="1" id={`s${children[0].sale}`} className="card ">
          <img src={`${children[0].logo}`} className="card-img-top" alt="" />
          <div className="card-body">
            <h5>{children[0].title}</h5>
            <p>
              В наличии: {children[0].count}</p>
            <button type="button" className="btn btn-info">Получить</button>
          </div>
        </div>
      </div> */}
      <div className="container">
        <button type="button" className="btn btn-info but">Сортировать по цене</button>
        <button type="button" className="btn btn-info but count">Сортировать по наличию</button>
      </div>
      <div key={Math.random() * 999999} className="container row row-cols-1 row-cols-md-2 g-4">
        {children.map((el) => (
          <div data-log="1" id={`s${el.sale}`} className="card ">
            <img src={`${el.logo}`} className="card-img-top" alt="" />
            <div className="card-body">
              <h5>{el.title}</h5>
              <p className="price">Цена: {el.price} рублей</p>
              <p>
                Цена на сегодня: <strong>{Math.round(el.price * (1 - el.sale * 0.01))}</strong> рублей</p>
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
