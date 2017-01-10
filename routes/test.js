var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  console.log('in test ->', req.user);
  console.log('session in test ->', req.session);

  res.send('ok');
});

module.exports = router;
