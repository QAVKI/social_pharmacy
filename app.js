const express = require('express');

const app = express();
require('@babel/register');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const updateSale = require('./controllers/updateSale');
updateSale()
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mail.me.com',
    port: 587,
    secure: false,
    auth: {
      user: 'zhtmn@icloud.com',
      pass: 'cotn-zjpz-ttyz-fxwg',
    },
  },
);

module.exports = function mailer(message) {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log('Email sent: ', info);
  });
};

const session = require('express-session');
const FileStore = require('session-file-store')(session);
// импорт вспомогательных ф-й

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');

const registrationRoutes = require('./routes/registrationRoutes');
const signinRoutes = require('./routes/signinRoutes');
const signOutRoutes = require('./routes/signOutRoutes');

const homeRoutes = require('./routes/homeRoutes');
const saleRoutes = require('./routes/saleRoutes');
const basketRoutes = require('./routes/basketRoutes');

// вызов функции проверки соединения с базоый данных
// dbCheck();

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'bears', // название куки
  store: new FileStore({}), // подключаем БД для храненя куков
  secret: process.env.COOKIE_SECRET,
  // require('crypto').randomBytes(10).toString('hex'),
  resave: false, // Если true,  пересохраняет сессию, даже если она не поменялась
  saveUninitialized: false, // Если false, куки появляются только при установке req.session
  cookie: {
    secure: process.env.NODE_ENV === 'production', // В продакшне нужно "secure: true" для работы через протокол HTTPS
    maxAge: 1000 * 60 * 60 * 24 * 10, // время жизни cookies, ms (10 дней)
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

// роутеры
app.use('/', indexRoutes);

app.use('/auth/registration', registrationRoutes);
app.use('/auth/signin', signinRoutes);
app.use('/signout', signOutRoutes);

app.use('/home', homeRoutes);
app.use('/sale', saleRoutes);
app.use('/basket', basketRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
