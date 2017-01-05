var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/index', { title: 'admin' });
});

router.get('/settings', function (req, res, next) {
  res.render('admin/settings');
});

module.exports = router;