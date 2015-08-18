var express = require('express');
var jwt = require('jsonwebtoken');

var tokenChecker = express.Router(); 

// route middleware to verify a token
tokenChecker.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, 'tokenSecret001!', function(err, decoded) {      
      if (err) {
        err.status=403
        next(err);
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    var err = new Error('Missing Token Information');
    err.status = 400;
    next(err);
   }
});

module.exports = tokenChecker;