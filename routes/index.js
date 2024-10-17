var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/real_version1', function(req, res, next) {
  res.send("<h1>Страница Real Версии 1</h1>")
});

router.get('/real_version2', function(req, res, next) {
  res.send("<h1>Страница Real Версии 3</h1>")
});

router.get('/real_version3', function(req, res, next) {
  res.send("<h1>Страница Real Версии 3</h1>")
});

module.exports = router;
