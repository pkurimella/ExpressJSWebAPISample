var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res, next) {
	
  var userObj = {Name:'John Doe', City : 'Detroit', Zip : 48393 , Phone :'+1-888-854-8755'}; //This is obtained after a valid auth and encrypt it

  var token = jwt.sign(userObj, 'tokenSecret001!', {
          expiresInMinutes: 5 // expires in 5 mins
        });
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
});

module.exports = router;
