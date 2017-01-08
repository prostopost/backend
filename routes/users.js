var express = require('express');
var router = express.Router();
var User = require('../models/User');
var HttpError = require('../error').HttpError;
var ObjectID = require('mongodb').ObjectID;

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
  //явно преобразую id к типу ObjectID
  try {
    var id = new ObjectID(req.params.id);
  } catch (e) {
    //если пользователь не найден, возвращаю 404
    return next(404);
  }
  User.findById(req.params.id, function (err, user) {
    if (err) { return next(err); }
    if (!user) {
      next(new HttpError(404, "User not found"));
    }
    res.json(user);
  });
});

module.exports = router;
