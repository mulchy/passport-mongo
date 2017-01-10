var express = require('express');
var path = require('path');
var passport = require('passport');
var router = express.Router();


router.get('/', function(req, res) {
  var indexPath = path.join(__dirname, '../public/views/index.html');
  res.sendFile(indexPath);
});

// Handles login form POST from index.html
router.post('/',
    passport.authenticate('local', {
        successRedirect: '/views/user.html',
        failureRedirect: '/views/failure.html'
    })
);

module.exports = router;
