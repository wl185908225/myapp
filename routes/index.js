var express = require('express');
var router = express.Router();


/*error*/
router.get('/error', function(req, res, next) {
	res.render('./error.njk');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./index.njk');
});

/* GET login page */
router.get('/login', function(req, res, next) {
  res.render('./user/login.njk');
});

/* GET register page */
router.get('/register', function(req, res, next) {
  res.render('./user/register.njk');
});

module.exports = router;
