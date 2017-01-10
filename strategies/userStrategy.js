var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');


passport.use('local', new LocalStrategy({
  passReqToCallback: true
}, function(req, username, attemptedPass, done) {
    console.log('hit local strategy');
  // look up the user
  User.findOne({username: username}, function(err, user) {
    if(!user){
      done(null, false, {message: 'Incorrect credentials.'});

    }else{
      user.comparePassword(attemptedPass, function(err, isMatch) {
        // handle error case when error in returned from passwordCompare

        if(isMatch){
          done(null, true, {message: 'Login success!'});
        }else{
          done(null, false, {message: 'Incorrect credentials.'});
        }
      });
    }
  });
}));

module.exports = passport;
