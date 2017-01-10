var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');


passport.use('local', new LocalStrategy({
  passReqToCallback: true
}, function(req, username, password, done) {
    console.log('hit local strategy');
  // look up the user
  User.findOne({username: username}, function(err, user) {
    if(!user){
      done(null, false, {message: 'Incorrect credentials.'});

    }else{
      // compare the password hashes
      // respond true/false
      done(null, true, {message: 'Found user!'});
    }
  });
}));

module.exports = passport;
