var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  var regPath = path.join(__dirname, '../public/views/register.html');
  res.sendFile(regPath);
});

router.post('/', function(req, res) {
  console.log('inside register post, req.body=', req.body);

  res.sendStatus(200);
});

module.exports = router;
