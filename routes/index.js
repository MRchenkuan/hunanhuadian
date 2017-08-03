var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '湖南华电首页' });
});
router.get('/distribution', function(req, res, next) {
    res.render('introductions/distribution', { title: '业务及分布' });
});
router.get('/about', function(req, res, next) {
    res.render('introductions/about', { title: '公司简介' });
});
router.get('/speech', function(req, res, next) {
    res.render('introductions/speech', { title: '总经理致辞' });
});
router.get('/leadership', function(req, res, next) {
    res.render('introductions/leadership', { title: '总经理致辞' });
});
module.exports = router;
