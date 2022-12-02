/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

// eslint-disable-next-line no-unused-vars
function Home({
  title, children, user, select,
}) {
  return (
    <Layout user={user}>
      <div className="container raw row row-cols-1 select">
        {select.map((el) => (
          <div className="card ">
            <img src={`${el['Drug.logo']}`} className="card-img-top" alt="" />
            <span className="card-body">
              <h5>{el['Drug.title']}</h5>
              <p>
                В наличии:
                {' '}
                {el['Drug.count']}

              </p>
              <button type="button" className="btn btn-info">Получить</button>
            </span>
          </div>
        ))}
      </div>
      <div className="container raw row row-cols-1 calendar-container">
        <div className="priceButton d-flex justify-content-space-around">
          <div><button type="button" className="btn btn-info but sort-btn">Сортировать по цене</button></div>
          <div><button type="button" className="btn btn-info but count">Сортировать по наличию</button></div>
        </div>
        <div className="box-call">
          <section className="calendar">
            <h1>Декабрь 2022</h1>
            <form action="#">
              <label className="weekday">ПН</label>
              <label className="weekday">ВТ</label>
              <label className="weekday">СР</label>
              <label className="weekday">ЧТ</label>
              <label className="weekday">ПТ</label>
              <label className="weekday">СБ</label>
              <label className="weekday">ВС</label>
              <label className="day invalid" data-day="0">
                <span />
                <em />
              </label>
              <label className="day invalid" data-day="3">
                <span>-1</span>
                <em />
              </label>
              <label className="day invalid" data-day="4">
                <span>0</span>
                <em />
              </label>
              <label className="day" data-day="5">
                <span>1</span>
                <em />
              </label>
              <label className="day" data-day="6">
                <input className="appointment" date-day="2" placeholder="Халява" readonly="true"  required="true" type="text" />
                <span style={{ color: "#dc143c", border: "black" }}>2</span>
                <em />
              </label>
              <label className="day" data-day="7">
                <span>3</span>
                <em />
              </label>
              <label className="day" data-day="8">
                <span>4</span>
                <em />
              </label>
              <label className="day" data-day="9">
                <span>5</span>
                <em />
              </label>
              <label className="day" data-day="10">
                <span>6</span>
                <em />
              </label>
              <label className="day" data-day="11">
                <span>7</span>
                <em />
              </label>
              <label className="day" data-day="12">
                <span>8</span>
                <em />
              </label>
              <label className="day" data-day="13">
                <input className="appointment" date-day="9" placeholder="Халява" readonly="true"  required="true" type="text" />
                <span style={{ color: "#dc143c", border: "black" }}>9</span>
                <em />
              </label>
              <label className="day" data-day="14">
                <span>10</span>
                <em />
              </label>
              <label className="day" data-day="15">
                <span>11</span>
                <em />
              </label>
              <label className="day" data-day="16">
                <span>12</span>
                <em />
              </label>
              <label className="day" data-day="17">
                <span>13</span>
                <em />
              </label>
              <label className="day" data-day="18">
                <span>14</span>
                <em />
              </label>
              <label className="day" data-day="19">
                <span>15</span>
                <em />
              </label>
              <label className="day" data-day="20">
                <input className="appointment" date-day="16" placeholder="Халява" readonly="true"  required="true" type="text" />
                <span style={{ color: "#dc143c", border: "black" }}>16</span>
                <em />
              </label>
              <label className="day" data-day="21">
                <span>17</span>
                <em />
              </label>
              <label className="day" data-day="22">
                <span>18</span>
                <em />
              </label>
              <label className="day" data-day="23">
                <span>19</span>
                <em />
              </label>
              <label className="day" data-day="24">
                <span>20</span>
                <em />
              </label>
              <label className="day" data-day="25">
                <span>21</span>
                <em />
              </label>
              <label className="day" data-day="26">
                <span>22</span>
                <em />
              </label>
              <label className="day" data-day="27">
                <input className="appointment" date-day="23" placeholder="Халява" readonly="true"  required="true" type="text" />
                <span style={{ color: "#dc143c", border: "black" }}>23</span>
                <em />
              </label>
              <label className="day" data-day="28">
                <span>24</span>
                <em />
              </label>
              <label className="day" data-day="29">
                <span>25</span>
                <em />
              </label>
              <label className="day" data-day="30">
                <span>26</span>
                <em />
              </label>
              <label className="day" data-day="31">
                <span>27</span>
                <em />
              </label>
              <label className="day" data-day="32">
                <span>28</span>
                <em />
              </label>
              <label className="day" data-day="33">
                <span>29</span>
                <em />
              </label>
              <label className="day" data-day="34">
                <input className="appointment" date-day="30" placeholder="Халява" readonly="true"  required="true" type="text" />
                <span style={{ color: "#dc143c", border: "black" }}>30</span>
                <em />
              </label>
              <label className="day" data-day="35">
                <span>31</span>
                <em />
              </label>
              <div className="clearfix" />
            </form>
          </section>

        </div>
      </div>
      <div key={Math.random() * 999999} id="shop-container" className="container row row-cols-1 row-cols-md-2 g-4">
        {children.map((el) => (
          <div data-id={el.id} data-count={el.count} id={`s${el.sale}`} className="card ">
            <img src={`${el.logo}`} className="card-img-top" alt="" />
            <p className="card-body">
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
              <p className="nal">
                В наличии:
                {' '}
                <span>
                  {el.count}
                </span>

              </p>
              <button type="button" className="btn btn-info buy-btn">Купить</button>
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Home;
