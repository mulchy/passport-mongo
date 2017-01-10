var express = require('express');
var router = express.Router();
var path = require('path');

var UserSchema = require('../models/user');

router.get('/', function(req, res) {
  var regPath = path.join(__dirname, '../public/views/register.html');
  res.sendFile(regPath);
});

router.post('/', function(req, res) {
  var sentUser = req.body;

  UserSchema.create(sentUser, function(err, response) {
    if(err){
      if(err.code)
      console.log(err.code); //what error handling todo here?
      // some error handling - bad password
      // next(err) - pass to more verbose error handling logic
      res.sendStatus(500);
    }else{
      res.redirect('/'); // redirect to the login
    }
  });
});

module.exports = router;
