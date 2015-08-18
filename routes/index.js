var express = require('express');
var router = express.Router();

/* GET home page / route. */
router.get('/', function(req, res, next) {
  res.send('Welcome to Express API');
});

module.exports = router;
