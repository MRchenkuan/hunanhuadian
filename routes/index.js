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
router.get('/culture', function(req, res, next) {
    res.render('cultures/constructure', { title: '文化体系' });
});
router.get('/rules', function(req, res, next) {
    res.render('cultures/rules', { title: '员工守则' });
});

router.get('/photos', function(req, res, next) {
    res.render('cultures/photos', { title: '电厂美景' });
});

router.get('/hire', function(req, res, next) {
    res.render('hr/hire', { title: '人才招聘' });
});

router.get('/training', function(req, res, next) {
    res.render('hr/training', { title: '教育培训' });
});

router.get('/trends', function(req, res, next) {
    res.render('news/trends', { title: '行业动态' });
});
router.get('/basenews', function(req, res, next) {
    res.render('news/basenews', { title: '基层新闻' });
});
router.get('/importance', function(req, res, next) {
    res.render('news/importance', { title: '公司要闻' });
});
module.exports = router;
