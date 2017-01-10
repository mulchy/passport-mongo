var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('./strategies/userStrategy');

//require routers
var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var homeRouter = require('./routes/home');
var testRouter = require('./routes/test');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
  secret: 'secret',
  key: 'user',
  resave: 'true',
  saveUninitialized: false,
  cookie: { maxage: 60000, secure: false }
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routers
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/home', homeRouter);
app.use('/test', testRouter);

// server port set and listen
var serverPort = process.env.port || 3000;
app.set('port', serverPort);

var server = app.listen(serverPort, function() {
  console.log('up and listening on', server.address().port);
});

// connect to the mongodb
var mongoURI = "mongodb://localhost:27017/tauPassportPractice"; // heroDatabase is the db name
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});
