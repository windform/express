var express = require('express');
var router = express.Router();

/*路由文件*/
/* GET home page. */
router.all('/', function(req, res, next) {
	res.render('index', {title: 'Express' ,layout:'home'});
})
.all('/list',function(req, res, next){
	res.render('list', {title: 'List'});
})
.all('/users', function(req, res, next) {
  res.send('respond with a resource');
})
.all('/users/:username', function(req, res, next) {
  if(users[req.params.username]){
  	next();
  }else{
  	res.send(req.params.username+' is not exist.');
  }
})
.all('/users/:username', function(req, res, next) {
  res.send(JSON.stringify(users[req.params.username]));
})
.all('/users/:username', function(req, res, next) {
  res.send('done');
})
.all('/hello',function(req, res, next){
	res.send('The time is :'+new Date().toString());
});


module.exports = router;
