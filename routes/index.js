var express = require('express');
var path = require('path');
var passport = require('passport');
var router = express.Router();


router.get('/', function(req, res) {
  var indexPath = path.join(__dirname, '../public/views/index.html');
  res.sendFile(indexPath);
});

router.post('/', function functionName(req, res) {
  passport.authenticate('local', function(err, account, info) {
    if(account){
      res.status(200).send({message: info}); // user auth success
    }else{
      res.status(403).send({message: info}); // i understand, but refuse to grant access
      // 404 - don't know what you are talking about
    }
  })(req, res);
});

// from stack overflow
// app.get('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/login'); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.redirect('/users/' + user.username);
//     });
//   })(req, res, next);
// });

module.exports = router;
