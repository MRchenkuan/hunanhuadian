var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: '湖南华电首页' ,
      newsList: [
          {title:'迎“风”而上，太平里二期50MW风电场首台机组成功并网发电',banner:'/public/images/home/news1@2x.jpg'},
          {title:'深入开展以“全面落实企业安全生产主体责任”为主题的2017年安全生产月活动',banner:'/public/images/home/news2@2x.jpg'},
          {title:'湖南华电郴州风力发电有限公司开展“风电之声”读书月活动',banner:'/public/images/home/news3@2x.jpg'},
          {title:'公司党支部开展“缅怀革命先烈，永葆党性纯洁”红色教育活动',banner:'/public/images/home/news4@2x.jpg'},
          {title:'湖南华电郴州风力发电有限公司工会开展“赴一线、送清凉”活动',banner:'/public/images/home/news5@2x.jpg'}
      ],
      newsCards:[
          {banner:"/public/images/img1@2x.jpg",title:"总经理致辞",text:"湖南华电郴州风力发电有限公司作为湖南首家风力发电企业,带动了湖南绿色清洁能源产业，拥有难得的机遇和发展空间，但同时也面对很多挑战……",url:"speech"},
          {banner:"/public/images/img2@2x.jpg",title:"公司简介",text:"湖南华电郴州风力发电有限公司于2009年6月11日注册成立，是湖南省首家建设投产的风力发电公司……",url:"about"},
          {banner:"/public/images/img3@2x.jpg",title:"领导班子",text:"公司领导班子共4人，设有公司总经理兼党支部书记1人、副总经理3人……",url:"leadership"},
          {banner:"/public/images/img4@2x.jpg",title:"业务及分布",text:"公司仰天湖36.3MW风电项目于2008年8月通过湖南省发展和改革委员会核准批复，2010年1月3日投产……",url:"distribution"}
      ],
      cultureCards: [
          {banner:'/public/images/img1@2x.jpeg',url:'culture',title:'文化体系'},
          {banner:'/public/images/img2@2x.jpeg',url:'rules',title:'员工守则'},
          {banner:'/public/images/img3@2x.jpeg',url:'photos',title:'电厂美景'}
      ]
  });
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
    res.render('news/basenews', { title: '基层新闻',newslist: require('../public/mock/basiclist.json') });
});
router.get('/importance', function(req, res, next) {
    res.render('news/importance', { title: '公司要闻',newslist: require('../public/mock/newslist.json')  });
});
module.exports = router;
