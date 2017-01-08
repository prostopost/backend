var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('web/auth/register', {title:'Вход'});
});

module.exports = router;