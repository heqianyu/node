var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/testAPi',function (req,res,next) {
	res.send('{"name":"heqianyu","age":23}')
});

module.exports = router;
