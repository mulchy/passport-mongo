var express = require('express');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var mongoose = require('mongoose');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// routers
app.use('/', indexRouter);

// server port set and listen
var serverPort = process.env.port || 3000;
app.set('port', serverPort);

var server = app.listen(serverPort, function() {
  console.log('up and listening on', server.address().port);
});

// connect to the mongodb
var mongoURI = "mongodb://localhost:27017/heroDatabase"; // heroDatabase is the db name
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});
