// const createError = require('http-errors');
// const path = require('path');
// const cookieParser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const frontend = require('./routes/frontend');
const backend = require('./routes/backend');
const port = process.env.PORT || 3000;

const app = express();

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function () {
    //console.log('mongodb connected')
  })
  .catch(function (err) {
    console.log(err);
  });

// view engine setup
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', frontend);
app.use('/', backend);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/

// error handler
app.listen(port, function () {
  console.log('listening to port');
});

module.exports = app;
