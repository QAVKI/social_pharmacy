const React = require('react');
const Layout = require('./Layout');

function BasketViews({ user, basket }) {
  return (
    <Layout user={user}>

      <div className="basket">
        <h1>Корзина</h1>
        <div className="jsBasCard d-sm-flex flex-row flex-wrap justify-content-center">
          <div key={Math.random() * 999999} id="shop-container" className="container row row-cols-1 row-cols-md-2 g-4">
            {basket.map((el) => (
              <div data-id={el.id} data-count={el.count} id={`s${el['Drug.sale']}`} className="card ">
                <img src={`${el['Drug.logo']}`} className="card-img-top" alt="" />
                <p className="card-body">
                  {el['Drug.sale'] === 200 ? (
                    <>
                      <p className="card-body" />
                      <h5>Думаю для начала тебе стоит зарегистрироваться</h5>
                    </>
                  ) : (
                    <>
                      {el['Drug.sale'] === 0 ? (
                        <>
                          <h5>{el['Drug.title']}</h5>
                          <p>
                            Цена:
                            {' '}
                            {el['Drug.price'] * el.count}
                            {' '}
                            рублей
                          </p>
                        </>
                      ) : (
                        <>
                          <h5>{el['Drug.title']}</h5>
                          <p className="price">
                            Цена:
                            {' '}
                            {el['Drug.price'] * el.count}
                            {' '}
                            рублей
                          </p>
                          <p>
                            Цена на сегодня:
                            {' '}
                            <strong>{Math.round(el['Drug.price'] * (1 - el['Drug.sale'] * 0.01)) * el.count}</strong>
                            {' '}
                            рублей
                          </p>
                        </>
                      )}
                      <p className="nal">
                        Количество:
                        {' '}
                        {el.count}
                      </p>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="d-sm-flex flex-column flex-wrap align-item-center text-center">
          <p className="fs-5">
            Итого:
            {' '}
            {basket.reduce((acc, curr) => acc + curr.count * curr['Drug.price'], 0)}
          </p>
          <button type="button" className="btn-success">Оформить заказ</button>
        </div>

      </div>
    </Layout>
  );
}

module.exports = BasketViews;
