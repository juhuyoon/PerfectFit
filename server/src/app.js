const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('config');
const hbs = require('hbs');
const debug = require('debug')('server:app');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.locals.title = config.get('app.name');

// Exposing locals as template data
hbs.localsAsTemplateData(app);
// Register all the partials
hbs.registerPartials(`${__dirname}/views/partials`, (err) => {
  if (err) {
    return debug('error loading partials', err);
  }
  return debug('Partials are registered.');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
