var express = require('express');
var router = express.Router();

/* GET V1 Home  */
router.get('/', function(req, res, next) {
  res.json({Message : 'Version 1 Home' , TokenDetails : req.decoded });
});

/* GET Token Info  */
router.get('/tokenInfo', function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  res.json({TokenSent : token, TokenDetails : req.decoded});
});

module.exports = router;
