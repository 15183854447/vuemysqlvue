var express = require('express');
var router = express.Router();

var db = require('../db')
/* GET home page. */
router.get('/', function (req, res, next) {
    db.query('select * from users', [], function (results, fields) {
        console.log(results)
    });
    res.render('index', {title: 'Express'});
});
router.get('/list.html', function (req, res, next) {
    db.query('select * from users', [], function (results, fields) {
        res.send(results)
    })
});
module.exports = router;
