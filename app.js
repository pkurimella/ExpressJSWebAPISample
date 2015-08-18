var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');


/******REQUIRE ROUTES**********/
var homeRoute = require('./routes/index');
var apiV1Routes = require('./routes/api/v1Routes');
var apiV2Routes = require('./routes/api/v2Routes');
var authenticateRoute = require('./routes/authenticate');
/******END********************/

var tokenCheckerMiddleWare = require('./routes/middleware/tokenChecker');

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/******REGISTER ROUTES**********/
app.use('/', homeRoute);
app.use('/authenticate', authenticateRoute);
app.use('/api*', tokenCheckerMiddleWare);  // apply the routes to our application with the prefix /api
app.use('/api/v1', apiV1Routes);
app.use('/api/v2', apiV2Routes);
/******END********************/


/*************ERROR HANDLERS*********/
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Requested resource was Not Found');
  err.status = 404;
  next(err);
});


// development error handle : will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message,
      error: err
    });
  });
}

// production error handler : no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

/******END****************************/

module.exports = app;
