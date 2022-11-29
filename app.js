const express = require('express');

const app = express();
require('@babel/register');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

// импорт вспомогательных ф-й
// const dbCheck = require('./db/dbCheck');

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');
const authRoutes = require('./routes/authRoutes');

const registrationRoutes = require('./routes/registrationRoutes');

const homeRoutes = require('./routes/homeRoutes');
const saleRoutes = require('./routes/saleRoutes');
const basketRoutes = require('./routes/basketRoutes');

// вызов функции проверки соединения с базоый данных
// dbCheck();

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// роутеры
app.use('/', indexRoutes);
app.use('/auth', authRoutes);

app.use('/auth/registration', registrationRoutes);

app.use('/home', homeRoutes);
app.use('/sale', saleRoutes);
app.use('/basket', basketRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
