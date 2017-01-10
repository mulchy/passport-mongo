var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');


passport.use('local', new LocalStrategy({
  passReqToCallback: true
}, function(req, username, password, done) {
    console.log('hit local strategy');
  //look up the user
  // compare the password hashes
  // respond true/false

  done(null, false); // for now default to false

}));

module.exports = passport;
