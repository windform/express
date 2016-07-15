var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
})
.get('/reg',function(req, res, next){
  res.render('reg', { title: '用户注册' });
})
.post('/reg',function(req, res, next){
  alert('hello')
})

module.exports = router;
