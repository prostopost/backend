var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find({}, function (err, users) {
    if (err) {
      return next(err);
    }
    res.json(users);
  });
});

router.get('/users/:id', function (req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) { return next(err); }
    res.json(user);
  });
});

module.exports = router;
