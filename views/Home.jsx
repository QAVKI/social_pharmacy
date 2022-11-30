/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

// eslint-disable-next-line no-unused-vars
function Home({ title, children, user, select }) {
  return (
    <Layout user={user}>
      <div className="container raw row row-cols-1">
        {select.map((el) => (
          <div className="card ">
            <img src={`${el['Drug.logo']}`} className="card-img-top" alt="" />
            <div className="card-body">
              <h5>{el['Drug.title']}</h5>
              <p>
                В наличии: {el['Drug.count']}</p>
              <button type="button" className="btn btn-info">Получить</button>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <button type="button" className="btn btn-info but">Сортировать по цене</button>
        <button type="button" className="btn btn-info but count">Сортировать по наличию</button>
      </div>
      <div key={Math.random() * 999999} className="container row row-cols-1 row-cols-md-2 g-4">
        {children.map((el) => (
          <div data-log="1" id={`s${el.sale}`} className="card ">
            <img src={`${el.logo}`} className="card-img-top" alt="" />
            <div className="card-body">
              {el.sale === 0 ? (
                <>
                  <h5>{el.title}</h5>
                  <p>
                    Цена:
                    {' '}
                    {el.price}
                    {' '}
                    рублей
                  </p>
                </>
              ) : (
                <>
                  <h5>{el.title}</h5>
                  <p className="price">
                    Цена:
                    {' '}
                    {el.price}
                    {' '}
                    рублей
                  </p>
                  <p>
                    Цена на сегодня:
                    {' '}
                    <strong>{Math.round(el.price * (1 - el.sale * 0.01))}</strong>
                    {' '}
                    рублей
                  </p>
                </>
              )}
              <p>
                В наличии:
                {' '}
                {el.count}

              </p>
              <button type="button" className="btn btn-info">Купить</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Home;
